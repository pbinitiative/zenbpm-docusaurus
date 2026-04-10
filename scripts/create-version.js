const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const version = process.argv[2];
if (!version) {
  console.error('Usage: node scripts/create-version.js <version>');
  console.error('Example: node scripts/create-version.js v1.1.0');
  process.exit(1);
}

const root = path.resolve(__dirname, '..');
const versionId = version.replace(/\./g, '_');

// 1. Copy OpenAPI spec and proto for this version
console.log(`Copying OpenAPI spec as api-${version}.yaml...`);
fs.copySync(
  path.join(root, 'openapi/redocusaurus/api.yaml'),
  path.join(root, `openapi/redocusaurus/api-${version}.yaml`)
);

console.log(`Copying proto as zenbpm-${version}.proto...`);
fs.copySync(
  path.join(root, 'proto/zenbpm.proto'),
  path.join(root, `proto/zenbpm-${version}.proto`)
);

// 2. Run docusaurus docs:version
console.log(`Creating docs version ${version}...`);
execSync(`npx docusaurus docs:version ${version}`, { cwd: root, stdio: 'inherit' });

// 3. Update versioned docs to reference version-specific specs
const versionedDir = path.join(root, `versioned_docs/version-${version}`);

// Update openapi.mdx
const openapiMdx = path.join(versionedDir, 'static', 'openapi.mdx');
if (fs.existsSync(openapiMdx)) {
  let content = fs.readFileSync(openapiMdx, 'utf8');
  content = content.replace('[full width](/openapi-api)', `[full width](/openapi-api-${versionId})`);
  content = content.replace('<Redoc id="api" />', `<Redoc id="api-${versionId}" />`);
  fs.writeFileSync(openapiMdx, content);
  console.log('Updated openapi.mdx');
}

// Update all markdown files with spec/proto links
const mdFiles = [
  'reference/api-reference.md',
  'reference/bpmn/bpmn-engine.md',
  'index.md',
];

for (const file of mdFiles) {
  const filePath = path.join(versionedDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /pathname:\/\/\/redocusaurus\/api\.yaml/g,
    `pathname:///redocusaurus/api-${version}.yaml`
  );
  content = content.replace(
    /pathname:\/\/\/zenbpm\.proto/g,
    `pathname:///zenbpm-${version}.proto`
  );
  content = content.replace(
    /\/openapi-api(?!-)/g,
    `/openapi-api-${versionId}`
  );
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}

console.log(`\nVersion ${version} created successfully!`);
