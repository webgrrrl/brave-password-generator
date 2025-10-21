const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        popup: './src/popup/popup.ts',
        background: './src/background/background.ts',
        content: './src/content/content.ts',
        options: './src/options/options.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: './src/popup/popup.html',
            chunks: ['popup'],
        }),
        new HtmlWebpackPlugin({
            filename: 'options.html',
            template: './src/options/options.html',
            chunks: ['options'],
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: './dist',
    },
};