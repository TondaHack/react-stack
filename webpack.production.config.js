/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-[hash].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('style-[hash].css', {
      allChunks: true
    })

  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [ {
      test: /\.jsx?$/,
      loaders: [ 'babel' ],
      include: path.join(__dirname, 'src')
    },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css!postcss-loader?sourceMap"),
      },
      // {
      //     test: /\.json$/,
      //     loader: 'json-loader'
      // },
      // {
      //     test: /\.(png|jpg|gif)$/,
      //     loader: 'file-loader?name=img/img-[hash:6].[ext]'
      // },
      // {
      //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'
      // },
      // {
      //     test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'
      // },
      // {
      //     test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'
      // },
      // {
      //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream'
      // },
      // {
      //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'
      // }
    ]
  },
  postcss: function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")({
        features: {
          nesting: true,
          customMedia: true,
          colorHexAlpha: true,
          colorRgba: true,
          mediaQueriesRange: true
        }
      })
    ];
  }
};
