const fs = require('fs');

const versions = fs.existsSync('./versions.json')
  ? JSON.parse(fs.readFileSync('./versions.json', 'utf8'))
  : [];

const versionId = (v) => v.replace(/\./g, '_');

const redocSpecs = [
  {
    spec: 'openapi/redocusaurus/api.yaml',
    id: 'api',
    route: '/openapi-api',
  },
  ...versions.map((v) => ({
    spec: `openapi/redocusaurus/api-${v}.yaml`,
    id: `api-${versionId(v)}`,
    route: `/openapi-api-${versionId(v)}`,
  })),
];

module.exports = {
  title: 'Documentation',
  staticDirectories: ['openapi', 'proto', 'static'],
  url: process.env.SITE_URL || 'http://localhost:3000',
  baseUrl:  process.env.BASE_URL || '/',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          lastVersion: versions[0] || 'current',
          versions: {
            current: {
              label: 'Next 🚧',
            },
          },
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            const excludedDir = 'static/'
            function filterItems(items) {
              return items
                .filter((item) => !(item.type === 'doc' && item.id.startsWith(excludedDir)))
                .map((item) => {
                  if (item.type === 'category' && item.items) {
                    return { ...item, items: filterItems(item.items) };
                  }
                  return item;
                })
                .filter((item) => !(item.type === 'category' && item.items.length === 0));
            }
            return filterItems(sidebarItems);
          },
        },
        blog: false,
        theme: {
          // customCss: "",
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: redocSpecs,
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    navbar: {
      title: 'ZenBPM Documentation',
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      }
    },
  },
};
