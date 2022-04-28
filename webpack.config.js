const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");

// require("custom-env").env(process.env.NODE_ENV); /* https://www.npmjs.com/package/custom-env */
// const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  // ! source-map has been deprecated, use convert-source-map
  // https://github.com/thlorenz/convert-source-map
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // i => case insensitive
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: "Homely Recipes",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Recipe Collections",
      filename: "collections.html",
      template: path.resolve(__dirname, "src/pages/collections.html"),
    }),
    new HtmlWebpackPlugin({
      title: "About",
      filename: "about.html",
      template: path.resolve(__dirname, "src/pages/about.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Contact",
      filename: "contact.html",
      template: path.resolve(__dirname, "src/pages/contact.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Jokes",
      filename: "jokes.html",
      template: path.resolve(__dirname, "src/pages/jokes.html"),
    }),
    new HtmlWebpackPlugin({
      title: "Nutrition",
      filename: "nutrition.html",
      template: path.resolve(__dirname, "src/pages/nutrition.html"),
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
  ],
};
