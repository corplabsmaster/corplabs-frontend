/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "babel-plugin-import",
    options: {
      libraryName: "antd",
      style: true,
    },
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bizcharts/,
            use: loaders.null(),
          },
          {
            test: /react-qr-reader/,
            use: loaders.null(),
          },
          {
            test: /react-slick/,
            use: loaders.null(),
          },
          {
            test: "/@lottiefiles/react-lottie-player/",
            use: loaders.null(),
          },
          {
            test: "/@lottiefiles/lottie-interactivity/",
            use: loaders.null(),
          },
          {
            test: "/@ant-design/react-slick/",
            use: loaders.null(),
          },
          {
            test: "/antd/",
            use: loaders.null(),
          },
          {
            test: "/slick/",
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createRedirect } = actions;
//   createRedirect({
//     fromPath: "/",
//     toPath: "/app",
//     isPermanent: true,
//     redirectInBrowser: true,
//   });
// };

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.tsx"),
//     context: {},
//     defer: true,
//   });
// };

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
