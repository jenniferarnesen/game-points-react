const path = require('path');
const debug = process.env.NODE_ENV !== "production";

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
        use: ['style-loader', 'css-loader'],
        // loaders: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
};
