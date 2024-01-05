// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Catalyst',
  tagline: 'Speed up your reactions',
  url: 'https://catalyst-soar.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SecurityBrewery', // Usually your GitHub org/user name.
  projectName: 'catalyst-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SecurityBrewery/catalyst-docs/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'community.json',
            route: '/api/',
          },
        ],
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Catalyst',
        logo: {
          alt: 'Catalyst Logo',
          src: 'img/flask.svg',
          srcDark: 'img/flask_white.svg',
        },
        items: [
          {to: '/features', label: 'Features', position: 'left'},
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                to: '/docs/category/catalyst-handbook',
                label: 'Catalyst Handbook'
              },
              {
                to: '/api',
                label: 'API',
              },
            ]
          },

          {
            href: 'https://github.com/SecurityBrewery/catalyst',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Why Catalyst?',
            items: [
              {
                label: 'Features',
                to: '/features',
              }
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                to: '/docs/category/catalyst-handbook',
                label: 'Catalyst Handbook'
              },
              {to: '/api', label: 'API', position: 'left'},
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SecurityBrewery/catalyst',
              },
            ],
          },
        ],
        copyright: `
            <!--a href="https://discordapp.com/invite/docusaurus" target="_blank" rel="noopener noreferrer" class="footer__link-item margin-right--md">
              <span>
                Discord
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module">
                  <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg>
              </span>
            </a>
            <a href="https://twitter.com/docusaurus" target="_blank" rel="noopener noreferrer" class="footer__link-item margin-right--md">
              <span>
                Twitter
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module">
                  <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg>
              </span>
            </a>
            <a href="https://github.com/SecurityBrewery/catalyst" target="_blank" rel="noopener noreferrer" class="footer__link-item">
              <span>
                GitHub
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module">
                  <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg>
              </span>
            </a>
            <br/>
            Copyright © ${new Date().getFullYear()} Security Brewery-->`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
