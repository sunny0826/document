const repoUrl = 'https://github.com/2050dev/document';
const title = '2050.dev';

const siteConfig = {
  title, // Title for your website.
  tagline: 'Every April we get together for 3 days until 2050.',
  url: 'https://2050.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project
  // The name of the GitHub repository. Used by the deployment command
  projectName: 'document',
  organizationName: '2050dev',
  favicon: 'img/favicon.png',

  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title,
      logo: {
        alt: title,
        src: 'img/2050.png',
      },
      items: [
        { to: 'docs', label: 'Docs', position: 'right' },
        { href: repoUrl, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              key: 1,
              label: 'Getting started',
              to: 'docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              key: 3,
              label: '2050.org',
              href:
                'https://2050.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              key: 5,
              label: 'GitHub',
              href: repoUrl,
            },
            {
              key: 6,
              label: 'Star',
              href: repoUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 2050.dev Author`,
    },
    image: 'img/2050.png',
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'jsx',
    },
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    // },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `${repoUrl}/blob/master`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `${repoUrl}/blob/master/blog`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = siteConfig;
