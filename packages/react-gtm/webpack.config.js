const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    // Enable hot reloading
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["url-loader", "style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        exclude: /node_modules/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/data", to: "./data" },
      ],
    }),
  ],
};
