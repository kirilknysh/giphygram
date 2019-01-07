const path = require('path');

const WebpackNotifierPlugin = require('webpack-notifier');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        host: '0.0.0.0',
    },
    plugins: [
        new WebpackNotifierPlugin(),
    ],
});
