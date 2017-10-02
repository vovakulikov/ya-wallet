/**
 * Created by Not Igor on 30.05.2017.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
// const pug = require('./webpack/pug-loader');
const devserver = require('./webpack/devServer');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/uglifyJS');
const webpack = require('webpack');
const images = require('./webpack/images');
const es6 = require('./webpack/babelES6');
const definePROD = require('./webpack/defineProd');
const gzip = require('./webpack/gzip');
const preactCompact = require('./webpack/preact-compact');

const PATHS = {
  src: path.join(__dirname, 'source/client'),
  build: path.join(__dirname, 'dist'),
};

const common = merge([
  {
    entry: {
      index: [
        'react-hot-loader/patch',
        `${PATHS.src}/index.js`],
      vendor: ['react', 'react-dom'],
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${PATHS.src}/index.html`,
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'], // Specify the common bundle's name.
      }),
    ],

  },
  es6(),
  // pug(),
  images(),
  // uglifyJS(),
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      preactCompact(),
      gzip(),
      definePROD(),
      extractCSS(),
      uglifyJS(),
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css(),
    ]);
  }
};
