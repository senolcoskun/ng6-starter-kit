const webpack           = require("webpack");
const path              = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: {},
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['ng-annotate-loader', 'babel-loader']
            }, {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
                exclude: /(node_modules)/,
                loader: 'url-loader?limit=100&name=images/[name].[ext]'
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            }, {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [

        new ExtractTextPlugin("css/[name].min.css", {
            allChunks: true
        }),

        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: 'body',
            hash: true
        }),

	    new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      minChunks: function (module, count) {
	        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
	      }
	    })

    ]

}