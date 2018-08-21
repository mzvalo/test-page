const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'production',
    entry: ['./src/js/index.js', './src/sass/index.scss'],
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: false
                        }
                    },
                    'sass-loader',
                ],
            }
        ]
    }
};
