var webpack=require('webpack');
var CopyWebpackPlugin=require('copy-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports={
	//入口文件
	entry:{
		app:__dirname+'/src/scripts/index.js'
	},
	//出口文件
	output:{
		path:__dirname+'/www',
		filename:'js/index.js'
	},
	//服务器配置
	devServer:{
		inline:true,
		//代理服务
		//http://localhost:8080------>http://localhost:3000
		proxy:{
			'/skill/*':{
				target:'http://localhost:3000',
				secure:false
			},
			'/work/*':{
				target:'http://localhost:3000',
				secure:false
			},
			'/project/*':{
				target:'http://localhost:3000',
				secure:false
			}
		}
	},
	//模块处理
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},/*
			{
				test:/\.css$/,
				loader:"style-loader!css-loader"
			},{
				test:/\.scss$/,
				loader:"style!css!sass"
			}*/{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract("style","css!sass")
			}
		]
	},
	//插件模块
	plugins:[
		new CopyWebpackPlugin([
				{from:'./src/index.html',to:'./'},
				{from:'./src/images',to:'./images',ignore:['*.gif']}
			]),
		new ExtractTextPlugin('./index.css'),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			}
		})
	]
}
/*
webpacck -p   进行压缩
webpacck -w//--watch   进行监听
*/