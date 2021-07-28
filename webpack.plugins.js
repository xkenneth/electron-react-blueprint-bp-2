const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

//Added to support scichart
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  //added to support scichart
  new CopyPlugin({
    patterns: [
        { from: "node_modules/scichart/_wasm/scichart2d.data", to: "" },
        { from: "node_modules/scichart/_wasm/scichart2d.wasm", to: "main_window/" }
    ]
  }),
];
