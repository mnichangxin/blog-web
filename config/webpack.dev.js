/**
 * Webpack development config
 */

const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: path.resolve('src')
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        publicPath: '/dist/',
        port: 8080,
        disableHostCheck: true
    },
    plugins: [
        // new BundleAnalyzerPlugin() // Enable/Disable dependency analysis
    ]
})