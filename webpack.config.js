var webpack = require('webpack');

var PLUGINS = [];

var DEV = process.env.NODE_ENV === 'dev';

if (!DEV) PLUGINS.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/',
		filename: 'bundle.js'
	},
	devtool: DEV ? 'cheap-module-eval-source-map' : false,
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: PLUGINS
}
