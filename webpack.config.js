var path = require("path");
var failPlugin = require("webpack-fail-plugin");
module.exports = {
  entry: "./src/client/ts/entry.ts",
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {test: /\.scss$/, loader: "style!css!sass"},
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src/client/ts')],
        loader: "ts-loader"
      }
    ]
  },
  plugin: failPlugin
};
