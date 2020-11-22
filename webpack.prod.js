const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/react-ts-github-calendar.tsx'),
  output: {
    filename: 'react-ts-github-calendar.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
