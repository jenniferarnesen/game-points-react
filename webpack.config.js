const path = require('path');
const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};


module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/index.jsx",
  output: {
    path: PATHS.dist,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        include: PATHS.app
      }
    ]
  }
};
