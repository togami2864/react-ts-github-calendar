const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/react-ts-github-calendar.tsx'),
  output: {
    filename: 'react-ts-github-calendar.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.css'],
  },
};
