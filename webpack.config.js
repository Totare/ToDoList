const { resolve } = require('path');

module.exports = {
	entry: resolve('./assets/js/app.js'),
    mode: 'development',
    watch: true,
    output: {
        path: resolve('./'),
		filename: 'public/js/app.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/jpg',
							// limit: 8192,
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  'style-loader',
				  // Translates CSS into CommonJS
				  'css-loader',
				  // Compiles Sass to CSS
				  'sass-loader',
				],
			}
		]
	}
}