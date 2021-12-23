module.exports = {
  mode: 'development',
	entry: __dirname + '/client/src/index.js',
	output: {
	  filename: 'bundle.js',
		path: __dirname + '/client/public'
	},
	module: {
		rules: [
  		{ 
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}] 
			}
		]
	}	
}
