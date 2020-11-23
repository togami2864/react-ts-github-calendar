const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/react-ts-github-calendar.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.css'],
  },
};
