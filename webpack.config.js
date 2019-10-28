const ExtractTextPlugin = require("extract-text-webpack-plugin");
let path = require('path');
let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: 'babel-loader',
                // exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // fallback: "style-loader",
                    use: "css-loader"
                })
            }
            //   {
            //       test: /\.css$/,
            //       use: [
            //           'style-loader',
            //           'css-loader'
            //       ]
            //   }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
    //    devtool: 'eval-sourcepmap'
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? 'false' : 'eval-sourcemap'
    return conf;
};