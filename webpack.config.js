var path = require('path');

var srcPath = path.join(__dirname, 'src');
var dstPath = path.join(__dirname, 'dst');

module.exports = {
    context: srcPath,
    entry: [path.join(srcPath, 'js', 'client.js'), path.join(srcPath, 'css', 'style.css')],
    output: {
        path: dstPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            /*README:https://github.com/babel/babel-loader*/
            {
                test: /\.(js|jsx)$/,
                exculde: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    cacheDirectory: true
                },
                plugins: ['transform-runtime']
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|bmp)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};