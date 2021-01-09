const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "stories": [
    "../__stories__/**/*.stories.mdx",
    "../__stories__/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      // this is for both less and scss
      test: /.*\.(?:le|c|sc)ss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'scss-loader', // if scss then add 'sass-loader'
      ]
    });
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css',
    }));
    return config;
  },
}
