const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // generates a html file in output dir with bundled js file loaded in it
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // unlike css-loader, it create css files
const loader = require("sass-loader");
// use style loader for injecting the css file into (output)js file
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  target: "web",

  // entry point
  entry: "./src",

  // output point
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader", // use ts-loader with babel loader if .babelrc file doesnt contains @babel/preset-typescript
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /.scss$/,
        // publicPath: "./",
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        // use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
