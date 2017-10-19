const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, 'public/main.js')],
    output: {
        path: path.resolve(__dirname, '.build/js'),
        filename: 'components.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}