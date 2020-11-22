const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'example', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example'),
  },
  devServer: {
    contentBase: './example',
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/template/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
});
