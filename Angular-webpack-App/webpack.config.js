var webpack = require('webpack');

module.exports = {
    entry: {
         'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devServer: {
        contentBase: "./dist",
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
            { test: /\.css$/,  loader: 'to-string-loader!css-loader' },

        ]
    }
};
