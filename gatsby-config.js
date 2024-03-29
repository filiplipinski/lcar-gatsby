const path = require('path');
require('dotenv').config();

// TODO: ujednolocic dane te z mainTemplate SEO
const siteTitle = 'LCAR Auto Detailing - Radom';
const siteDescription =
  'Specjalizujemy się w naprawach bezinwazyjnych PDR (wyciąganie wgnieceń) oraz naprawach za pomocą spotera. Dodatkowo wykonujemy korekty lakieru, polerowanie reflektorów, nanoszenie powłok kwarcowych, ceramicznych, a także wosków ochronnych';
const siteAuthor = 'Filip Lipiński';
const siteUrl = 'https://www.lcar.pl';
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords = [
  'lcar',
  'auto',
  'detailing',
  'radom',
  'usuwanie wgnieceń',
  'koretka lakieru',
  'polerowanie',
  'czyszczenie',
  'wynajem',
  'tuning',
  'modernizacja',
];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-layout',
      options: { component: require.resolve('./src/templates/MainTemplate/MainTemplate.tsx') },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: { emitWarning: true, failOnError: false },
      },
    },
    {
      resolve: 'gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'], failOnError: false },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: 'LCAR',
        description: siteDescription,
        start_url: `/`,
        background_color: `#f7f7f7`, // palette.background.default
        theme_color: `#2d2e28`, // palette.primary.main
        display: `minimal-ui`,
        icon: 'src/assets/images/icon.png',
        // icons: [
        //   {
        //     src: 'icons/icon_512x512.png',
        //     sizes: '512x512',
        //     types: 'image/png',
        //   },
        //   {
        //     src: 'icons/icon_192x192.png',
        //     sizes: '192x192',
        //     types: 'image/png',
        //   },
        // ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        providers: path.join(__dirname, 'src/providers'),
        theme: path.join(__dirname, 'src/theme'),
        assets: path.join(__dirname, 'src/assets'),
        vendors: path.join(__dirname, 'src/vendors'),
        styles: path.join(__dirname, 'src/styles'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.join(__dirname, 'src/assets'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: { trackingIds: ['G-S90LRKRNNL'] },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Sen`,
                variants: [`400`, `700`, `800`],
                subsets: ['latin', 'latin-ext'],
              },
            ],
          },
        },
      },
    },
    // 'gatsby-plugin-offline',
    // TODO: wylaczone poki co, bo sie gubia style na produkcji
    'gatsby-plugin-smoothscroll',
  ],
};
