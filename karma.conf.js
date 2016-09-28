/* eslint-disable */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], // can be runned in Chrome
    singleRun: true,
    frameworks: [ 'mocha', 'sinon' ], //use the mocha test framework and sinon
    files: [
      './src/js/**/**.spec.+(js|jsx)' //just load this file
    ],
    preprocessors: {
      './src/js/**/**.spec.+(js|jsx)': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'mocha', 'coverage' ], //report results in this format
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'dist',
          subdir: 'coverage'
        }
      ]
    },
    webpack: {
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        preLoaders: [
          {
            exclude: [ /node_modules/, /\.spec\.jsx?$/ ],
            test: /\.jsx?$/,
            loader: 'isparta'
          }
        ],
        loaders: [
          {
            exclude: /node_modules/,
            loaders: [ 'babel' ],
            test: /\.jsx?$/
          },
          {
            test: /\.scss$/,
            loaders: [ 'style', 'css', 'postcss', 'sass' ]
          }
        ]
      },
      postcss: [ autoprefixer({
        browsers: [ 'last 2 versions' ]
      }) ]
    },
    webpackServer: {
      noInfo: true
    }
  });
};