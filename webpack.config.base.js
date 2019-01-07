const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        'landing': './app/landing/landing-view.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.styl?$/,
                loader: 'stylint-loader',
            },
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'app'),
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.styl?$/,
                include: [
                    path.resolve(__dirname, 'app'),
                ],
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'stylus-loader',
                ],
            },
        ],
    },
    resolve: {
        alias: {
            'common': path.resolve(__dirname, 'app/common'),
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        },
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            test: /\.styl?$/,
            options: {
                stylint: {
                    config: path.resolve(__dirname, '.stylintrc'),
                },
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/landing/landing.html',
            chunks: ['landing'],
        }),
        new FaviconsWebpackPlugin({
            logo: 'common/img/logo.jpg',
            persistentCache: true,
            inject: true,
            background: '#000',
            title: 'giphy gram',
            icons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false,
            },
        }),
    ],
};
