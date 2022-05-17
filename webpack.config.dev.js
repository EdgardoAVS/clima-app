const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',

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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
				generator: {
          filename: 'static/images/[hash][ext][query]',
        },
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
    port: 3003,
		open: true,
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
    new Dotenv()
  ]
}