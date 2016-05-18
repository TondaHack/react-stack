var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        // files: [
        //     'tests.webpack.js' //just load this file
        // ],
        files: [
            './src/js/**/**.spec.+(js|jsx)' //just load this file
        ],
        preprocessors: {
            './src/js/**/**.spec.+(js|jsx)': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'dots', 'mocha', 'covarage' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        exclude: /node_modules/,
                        loaders: ['babel'],
                        test: /\.jsx?$/
                    },
                    {
                        test: /\.scss$/,
                        loaders: ['style', 'css', 'postcss', 'sass']
                    },
                ]
            },
            postcss: [autoprefixer({
                browsers: ['last 2 versions']
            })]
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};