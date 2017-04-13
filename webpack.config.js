const path = require('path');

module.exports = {
	entry :  path.join(__dirname,'src/index.js') ,
	output : {
		path : path.join(__dirname,'dist'),
		filename : 'bundle.js'
	},
	module: {
		rules : [
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /node-modules/,
				query : {
					preset : ['es2015','stage-2']
				}
			}
		]
	},
	devServer : {
		port : 8888,
		inline : true,
		hot : true
	}
}