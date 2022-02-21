import HTMLwebpackPlugin from 'html-webpack-plugin'
export const entry = './src/main.js'
export const output = {
    path: __dirname + '/dist',
    filename: 'bundle.js'
}
export const module = {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }]
}
export const module = {
    rules: [{
        test: /\.html$/i,
        loader: "html-loader",
    }]
}
export const plugins = [
    new HTMLwebpackPlugin({
        template: './src/index.html'
    })
]