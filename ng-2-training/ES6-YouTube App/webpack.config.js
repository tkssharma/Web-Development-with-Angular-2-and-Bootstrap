var webpack = require('webpack');
var HtmlWebpackPlugin = require( 'html-webpack-plugin');

module.exports = {
    entry: {
         'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
      path: './dist',
      filename: "[name]_bundle.js",
      publicPath: '/'
    },

    devServer: {
        contentBase: "./dist",
        port : 8089
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                     test: /\.css$/,
                     loader: "style-loader!css-loader"
                 }, {
                     test: /\.scss$/,
                     exclude: /node_modules/,
                     loader: "style-loader!css-loader!sass-loader"
                 }, {
                     test: /\.less?$/,
                     loaders: [
                         'style-loader', 'css-loader', 'less-loader?{"sourceMap":true}'
                     ],
                     include: __dirname
            },
            { test: /\.css$/,  loader: 'to-string-loader!css-loader' },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: true
        })
      ]
};
