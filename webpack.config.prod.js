const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist-prod'),
        filename: '[name].[hash].js',
    },
    devtool: 'nosources-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
});
