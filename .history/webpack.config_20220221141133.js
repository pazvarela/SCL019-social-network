const HTMLwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');;
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }]
    },
    module: {
        rules: [{
            test: /\.html$/,
            exclude: [/node_modules/, require.resolve('./index.html')],
            use: {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                },
            },

        }],
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/index.html'
        })
    ]
}