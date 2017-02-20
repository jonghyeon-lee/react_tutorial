var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules:true
						}
					}
					
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['es2015','react']
				}
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets:['es2015','react']
				}	
			}
		]
	},
	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		inline: true
	}
}