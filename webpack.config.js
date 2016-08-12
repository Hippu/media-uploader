var path = require("path");
module.exports = {
  entry: "./src/client/ts/entry.ts",
  output: {
    path: "static/",
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
  }
};
