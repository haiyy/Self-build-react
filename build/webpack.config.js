const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const base = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(base,{
    mode: 'development',
    //plugins:[new webpack.HotModuleReplacementPlugin()],
    devServer: {
        host: 'localhost',
        port: 8088,
        hot: true,
        open: true,
        inline:true,
        historyApiFallback: true,
        noInfo:true
    }, //配置webpack开发服务功能
     plugins:[
       new HtmlWebpackPlugin({
            filename:'index.html',
            template:'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool:'eval-source-map'
})
