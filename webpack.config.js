const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')

module.exports = {
    devServer: {
        port: 4000
    },
    resolve: {
        extensions: ['.js', '.json', 'css']
    },
    context: path.resolve(__dirname, 'src'),
    entry: './script.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, 'src'),
            template: './index.html',

        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g)$/,
                use: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_module/,
                use: 'babel-loader'
            }
        ]
    }
}