const HTMLwebpackPlugin = require('html-webpack-plugin'),
    const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }]
    },
    module: {
        rules: [{
            test: /\.html$/i,
            loader: "html-loader",
        }]
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/index.html'
        })
    ]
}