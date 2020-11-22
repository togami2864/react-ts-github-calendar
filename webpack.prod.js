const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  entry: 'src/react-ts-github-calender.tsx',
  output: {
    filename: 'react-ts-github-calender.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
