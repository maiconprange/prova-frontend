var CopyWebpackPlugin = require('copy-webpack-plugin');
var ReplacePlugin = require('replace-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate?add=true!babel',
                exclude: /node_modules/
            },
            {
                test: /.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname + '/app!html?root=' + __dirname + '/app'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?root=' + __dirname + '/app', 'autoprefixer-loader?browsers=last 2 versions', 'sass'],
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
			{ 
                test: /\.css/, 
                loader: "style-loader!css-loader" 
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff",
                options: { 
                    name: "./fonts/[hash].[ext]" 
                }
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader",
                options: { 
                    name: "./fonts/[hash].[ext]" 
                }
            }
        ]
    },
    plugins: [
		new CopyWebpackPlugin([
            {
			from: __dirname + '/app/index.html', 
			to: __dirname + '/dist'}
        ]),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false }}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ReplacePlugin({
            skip: process.env.NODE_ENV === 'development',
            entry: '/app/index.html',
            output: '/dist/index.html',
            data: {
              server: '',
              js: '<script src="./bundle.js"></script>',
              menu: ''
            }
          })
	],
    resolve: {
        root: path.resolve('app/'),
        extensions: ['', '.js']
    },
    eslint: {
        failOnError: true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./app")]
    }
    // ,devtool: '#source-map'
};