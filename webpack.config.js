var path  = require('path')
var webpack = require('webpack')

module.exports = {
    entry : './client/index.js',
    output : {
        path : path.join(__dirname, "client"),
        filename: 'bundle.js'
    },
    //devtool is used for viewing files on client side
    devtool:"source-map",                   
    module:{
        loaders : [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}