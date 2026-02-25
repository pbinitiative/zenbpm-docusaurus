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
          lastVersion: 'v1.0.0',
          versions: {
            current: {
              label: 'Next 🚧',
            },
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
        specs: [
          {
            spec: 'openapi/redocusaurus/api.yaml',
            id: 'api',
            route: '/openapi-api',
          },
        ],
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
