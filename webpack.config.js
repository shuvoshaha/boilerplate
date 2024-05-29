const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const { dependencies } = require('./package.json');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    target: 'web',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist/production/www'),
        publicPath: 'auto',
        chunkFilename: 'js/[id].[contenthash].js',
        filename: 'js/[name].[contenthash].js',
        clean: true,
    },
    optimization: {
        chunkIds: 'named',
        concatenateModules: true,
    },
    plugins: [
        new ESLintPlugin({}),
        new StylelintPlugin({
            files: path.join(__dirname, 'src', '**/*.s?(a|c)ss'),
        }),
        // new ModuleFederationPlugin({

        // }),
        new CopyPlugin({
            patterns: [
                {
                    from: '**/*',
                    to: 'images',
                    context: 'src/assets/images',
                },
            ],
        }),
        new Dotenv({
            path: './env/.env.local',
            allowEmptyValues: true,
            defaults: './env/.env.defaults',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        alias: {
            '@base': path.resolve(__dirname, 'src/base'),
            // '@images': path.resolve(__dirname, 'src/assets/images'),
            '@styles': path.resolve(__dirname, 'src/base/style'),
            '@navigation': path.resolve(__dirname, 'src/navigation'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@components': path.resolve(__dirname, 'src/base/components'),
            '@interface': path.resolve(__dirname, 'src/interface'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@view': path.resolve(__dirname, 'src/view'),
            '@config': path.resolve(__dirname, 'src/config'),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],

    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            prettier: false,
                            svgo: false,
                            svgoConfig: {
                                plugins: [{ removeViewBox: false }],
                            },
                            titleProp: true,
                            ref: true,
                        },
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
                issuer: {
                    and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
                },
            },
        ],
    },
};
