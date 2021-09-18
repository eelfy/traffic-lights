const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js',
        publicPath: '/dist/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};