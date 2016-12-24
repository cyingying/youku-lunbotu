var webpack = require('webpack');
var jqueryPlugin = new webpack.ProvidePlugin({$:'jquery',jQuery:'jquery','window.jQuery':'jquery'});
module.exports = {
    entry:'./src/js/index.js',
    output:{
        path:'./youku/',
        publicPath:'./youku/',
        filename:'index.js'
    },
    module:{ 
     loaders:[
       {test:/.js$/,loader:'babel',query:{presets: ['es2015'] },exclude:/node_modules/},
       {test:/.less$/,loader:'style!css!less'},
       {test:/.(jpg|png|gif)$/,loader:'url?limit=8129'}
     ]
    },
    plugins:[jqueryPlugin]
}   