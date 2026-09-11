import fs from 'node:fs/promises';
import path from 'node:path';

import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const docsDirectory = path.resolve('docs');
const parser = unified().use(remarkParse).use(remarkMdx);
const errors = [];

async function markdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(entryPath);
    return /\.mdx?$/.test(entry.name) ? [entryPath] : [];
  }));
  return files.flat().sort();
}

function checkUrl(file, node, url) {
  const value = url.trim();
  if (!value || value.startsWith('#') || value.startsWith('//')) return;
  if (value.startsWith('pathname:///')) return;
  if (/^[a-z][a-z\d+.-]*:/i.test(value)) return;

  const pathname = value.split(/[?#]/, 1)[0];
  if (!pathname.startsWith('/') || pathname === '/openapi-api') return;

  const position = node.position?.start;
  errors.push(
    `${path.relative(process.cwd(), file)}:${position?.line ?? 1}:${position?.column ?? 1} ` +
    `uses root-relative internal URL ${JSON.stringify(value)}`
  );
}

for (const file of await markdownFiles(docsDirectory)) {
  const content = await fs.readFile(file, 'utf8');
  // Docusaurus supports explicit heading IDs that plain remark-mdx reads as JS.
  const parseableContent = content.replace(
    /^(\s{0,3}#{1,6}\s.*?)(\s+\{#[\w-]+\})\s*$/gm,
    (_, heading, explicitId) => `${heading}${' '.repeat(explicitId.length)}`
  );
  let tree;
  try {
    tree = parser.parse(parseableContent);
  } catch (error) {
    const line = error.line ?? error.position?.start?.line ?? 1;
    const column = error.column ?? error.position?.start?.column ?? 1;
    errors.push(`${path.relative(process.cwd(), file)}:${line}:${column} ${error.message}`);
    continue;
  }

  visit(tree, ['link', 'image', 'definition'], (node) => {
    checkUrl(file, node, node.url);
  });

  visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node) => {
    for (const attribute of node.attributes ?? []) {
      if (
        attribute.type === 'mdxJsxAttribute' &&
        ['href', 'src', 'to'].includes(attribute.name) &&
        typeof attribute.value === 'string'
      ) {
        checkUrl(file, attribute, attribute.value);
      }
    }
  });
}

if (errors.length > 0) {
  console.error('Current documentation must use relative internal links:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('Current documentation uses relative internal links.');
}
