const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const paths = require('./paths');
const rules = require('./rules');

module.exports = {
    entry: paths.entryPath,
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.mjs', '.js', '.scss', '.css', '.gql', '.graphql']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
    },
};
