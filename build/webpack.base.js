const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        main: [path.resolve(__dirname + '/../', 'src/index.js')] //入口
    },
    output: {
        path: path.resolve(__dirname + '/../', 'dist'), //打包路径
        filename: '[name].js', //打包的文件名称
        publicPath: '/',
        // 添加 chunkFilename
        // chunkFilename: '[name].[chunkhash:5].chunk.js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                // options: {
                //     // you can specify a publicPath here
                //     // by default it use publicPath in webpackOptions.output
                //     publicPath: '../'
                // }
            }, "css-loader"]
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: "url-loader?limit=50000&name=[path][name].[ext]"
        }]
    }, //模块
    resolve: {
        extensions: ['.js', '.vue', '.jsx', '.json', '.css'],
        alias: {
            '@': path.resolve(__dirname + '/../', 'src')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
        // new HtmlWebpackPlugin({
        //     filename:'index.html',
        //     template:'src/index.html'
        // }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: "Common"
        }
    },
    externals: {
        "antd": "antd",
        "react": "React",
        "react-dom": "ReactDOM",
        "moment": "moment"
    }
    // devtool:'cheap-module-source-map'
}