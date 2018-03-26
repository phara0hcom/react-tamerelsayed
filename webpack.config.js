const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    "resolve-url-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?context=src/images/&name=images/[path][name].[ext]",
                    {
                        // images loader
                        loader: "image-webpack-loader",
                        query: {
                            mozjpeg: {
                                progressive: true
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 4
                            },
                            pngquant: {
                                quality: "75-90",
                                speed: 3
                            }
                        }
                    }
                ],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            mimetype: "application/font-woff",
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            mimetype: "application/octet-stream",
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(pdf)$/,
                loader: "file-loader",
                options: {
                    name: "cv/[name].[ext]"
                }
            }
        ]
    },
    plugins: [htmlPlugin]
};
