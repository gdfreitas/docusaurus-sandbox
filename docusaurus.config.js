module.exports = {
  title: '@gdfreitas/docusaurus-sandbox',

  // A string to be used as title delimiter of <title> tag. Defaults to `|`
  titleDelimiter: '🦖',

  tagline: 'Exploring open-source tool to generate static sites for content-driven products',
  url: 'https://gdfreitas.dev',

  /**
   * If `true` adds meta tag in pages to avoid search engines indexing our site
   */
  noIndex: false,
  baseUrl: '/',


  /**
   * It throws an error when building to ensure you never ship any broken link, but you can lower this security if needed.
   */
  onBrokenLinks: 'throw',

  /**
   * It prints a warning to let you know about your broken markdown link
   */
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gdfreitas',
  projectName: 'docusaurus-sandbox',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,

      // Enable to change the default icons for theme color switch
      // switchConfig: {
      //   darkIcon: '🌙',
      //   lightIcon: '\u2600',
      //   darkIconStyle: {
      //     marginLeft: '2px',
      //   },
      //   lightIconStyle: {
      //     marginLeft: '1px',
      //   },
      // },
    },
    announcementBar: {
      id: 'announcement_bar_feature', // Any value that will identify this message
      content: '👷 This banner is only here to show off this feature. This is a sandbox project for Docusaurus',
      backgroundColor: '#fbedc9', // Defaults to `#fff`
      textColor: '#87640b', // Defaults to `#000`
    },
    navbar: {
      title: 'Docusaurus',
      logo: {
        alt: 'Docusaurus Logo',
        src: 'img/logo.svg',
        // srcDark: 'img/logo_dark.svg' // If needed because of contrast
      },
      items: [
        { to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left', },
        { to: 'blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/gdfreitas/docusaurus-sandbox', label: 'GitHub', position: 'right', },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Style Guide', to: 'docs/', },
            { label: 'Second Doc', to: 'docs/doc2/', },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Twitter', href: 'https://twitter.com/gdfreitas', },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: 'blog', },
            { label: 'GitHub', href: 'https://github.com/gdfreitas/docusaurus-sandbox', },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} @gdfreitas, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [],
  themes: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gdfreitas/docusaurus-sandbox/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/gdfreitas/docusaurus-sandbox/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  /**
   * An array of scripts to be inserted at HTML <head>. Be sure to define async/defer attributes to avoid render-blocking executions
   */
  // scripts: [
  //   'https://docusaurus.io/script.js',
  //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js', async: true },
  // ],

  /**
   * An array of stylesheets to be inserted at HTML <head>.
   */
  // stylesheets: [
  //   'https://docusaurus.io/style.css',
  //   { href: 'http://mydomain.com/style.css', type: 'text/css', },
  // ],


};
