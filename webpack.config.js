const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  mode: prod ? 'production' : 'development',
	entry: __dirname + '/client/src/index.tsx',
	output: {
		path: __dirname + '/client/public'
	},
	module: {
		rules: [
  		{ 
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.ts', '.tsx', '.js', '.json']
				},
				use: 'ts-loader', 
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		]
	},
	devtool: prod ? undefined : 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'client/public/index.html',
		}),
		new MiniCssExtractPlugin(),
	],
};
