'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devServer = require('./dev.server');

const assetsPath = path.resolve(__dirname, './assets');
const srcPath = path.resolve(__dirname, './src');

module.exports = {
  devServer,
  mode: 'production',//development,production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@src': srcPath,
      '@assets': assetsPath
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },{
        test: /\.(png|gif|jpe?g|ttf)$/,
        use: [{
            loader: 'url-loader',
            options: {
              limit: 1024 * 4,
              name: './[name].[hash:7].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vuejs-example',
      template: './src/index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]
};