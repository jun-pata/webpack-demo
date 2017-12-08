module.exports ={
	entry : __dirname + "/app/main.js",
	output:{
		path: __dirname +"/public/",
		filename:"bundle.js"
	},
	devtool: 'eval-source-map',
	// __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
	devServer:{
		contentBase:'./public',//本地服务器所加载的页面所在的目录
		port:'8088',
		historyApiFallback:true,//不跳转
		inline:true //实时刷新
	},
	module:{
		rules:[
			{
				test:/(\.jsx|\.js)$/,
				use:{
					loader:'babel-loader'
				},
				exclude:/node_modules/
			},
			{
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                    	loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
		]
	}
}