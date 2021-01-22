const path = require("path");
const config = require("./webpack.config");
const { merge} = require("webpack-merge")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "prod")
    },
    optimization: {
    minimize: true,
      minimizer: [
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            template: "./dev/index.html",
            minify: {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true
            }
          })
      ]
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}), new CleanWebpackPlugin()],
    module: {
        rules: [{
            test: /\.css$|\.sass$|\.scss$/,
            use: [MiniCssExtractPlugin.loader , "css-loader", "sass-loader"]
        }]
    }
});