const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssNano = require('cssnano');

const BUILD_SRC_PATH = path.join(__dirname, 'app', 'src');

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
            autoprefixer({
                browsers: ['last 2 versions'],
            }),
            cssNano({
                preset: ['default', {
                    svgo: {
                        exclude: true,
                    },
                    zindex: false,
                    'postcss-zindex': false,
                }],
            }),
        ],
    },
};

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        main: './src/js/entry/index.jsx',
    },
    output: {
        path: path.join(__dirname, 'app', 'dist'),
        filename: '[name].bundle.js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/, // Match both .js and .jsx
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.styl?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    postCSSLoader,
                    'stylus-loader',
                ],
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         'css-loader',
                //         postCSSLoader,
                //         'stylus-loader',
                //     ],
                // }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('../styles/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: false,
            sourcemap: true,
            beautify: false,
            dead_code: true,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    stats: {
        colors: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.styl'],
        modules: [
            'node_modules',
            path.join(BUILD_SRC_PATH, 'js'),
            path.join(BUILD_SRC_PATH, 'styles'),
        ],
    },
    target: 'web',
    devtool: 'source-map',
    devServer: {
        contentBase: './app/dist/',
        open: true,
        hot: true,
    },
};
