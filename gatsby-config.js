// const domain = "http://localhost:1338";

module.exports = {
  siteMetadata: {
    title: "Corplabs",
    description: "Idea To Reality",
    author: "lorem",
    siteUrl: `https://www.corplabs.co`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/components/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "JeetBuzz App",
        short_name: "JeetBuzz",
        start_url: "/index",
        background_color: "#ffffff ",
        theme_color: "#ffffff ",
        display: "fullscreen",
        icon: "src/components/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "@components": "./components",
          "@pages": "./pages",
          "@state": "./state",
          "@services": "./services",
          "@helpers": "./helpers",
          "@views": "./components/views",
          "@images": "./components/images",
          "@styles": "./components/styles",
          static: {
            root: "./public",
            alias: "./static",
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            // "font-family": "ArialMT, Baskerville, Gotham, sans-serif",
            "primary-color": "#ffa200",
            // "layout-header-background": "#FFFFFF",
            // "layout-header-height": "88px",
            // "layout-header-color": "#000000",
            "menu-highlight-color": "#ffa200",
            "menu-item-color": "#000000",
            "menu-item-active-bg": "#ffa200",
            "menu-dark-color": "#ffa200",
            // "btn-height-base": "40px",
            // "layout-body-background": "#FFFFFF",
            // "btn-default-color": "#ffa200",
            "btn-default-border": "transparent",
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://jeetbuzzcasino.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-HGL28YZ0G8", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "G-QJYXW01SS2",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     // cookieDomain: "example.com",
    //     // defaults to false
    //     enableWebVitalsTracking: true,
    //   },
    // },
    "gatsby-plugin-postcss",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-antd",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-eslint",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
};
