const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const base = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(base,{
    mode: 'production',
    plugins:[]
   // plugins:[new webpack.HotModuleReplacementPlugin()],
    // devServer: {
    //     host: 'localhost',
    //     port: 8088,
    //     hot: true,
    //     open: true,
    //     inline:true,
    //     historyApiFallback: true,
    //     noInfo:true
    // }, //配置webpack开发服务功能
})

