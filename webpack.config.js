'use-strict';

var env = process.env.NODE_ENV;
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            title: 'Title',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'DEBUG': true,
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src/js')
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=img/img-[hash:6].[ext]'
            }
        ]
    },
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })]
};
