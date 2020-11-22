const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

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
});
