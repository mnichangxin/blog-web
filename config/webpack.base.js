/**
 * Webpack base config
 */

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    entry: {
        app: resolve('../src/main.js')
    },
    output: {
        path: resolve('../dist'),
    },
    resolve: {
        alias: {
            '@': resolve('../src'),
            '@components': resolve('../src/components'),
            '@pages': resolve('../src/pages'),
            '@styles': resolve('../src/styles'),
            '@router': resolve('../src/router'),
            '@assets': resolve('../src/assets')
        }
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all'
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    module: {
        rules: [
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1000000'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}