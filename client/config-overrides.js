const { override, addWebpackModuleRule } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override(
  addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  }),
  (config) => {
    config.ignoreWarnings = [/Failed to parse source map/];

    // Add TerserPlugin for minification and obfuscation
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console.log statements
            },
            output: {
              comments: false, // Remove comments
            },
          },
        })
      );
    } else {
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
              output: {
                comments: false,
              },
            },
          }),
        ],
      };
    }

    return config;
  }
);
