const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  }
};

module.exports = config;