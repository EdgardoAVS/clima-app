const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/image/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.png/,
        type: "asset/resource",
        
      }
    ]
  },
  devServer: {
    static: {
			directory: path.join(__dirname, 'dist'),
			watch: true,
		},
		//observa los cambios en todos nuestros archivos y actualiza el navegador
		watchFiles: path.join(__dirname, "./**"),
    compress: true,
    historyApiFallback: true,
    port: 3001,
		open: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
    }),
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    }),
  ]
}