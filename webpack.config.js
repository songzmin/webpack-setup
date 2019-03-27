const path=require("path");
const htmlWebpackPlugin=require('html-webpack-plugin');
const cleanWebpackPlugin=require('clean-webpack-plugin');
module.exports={
  entry:{     //入口，之后会生成两个文件，一个是app.bundle.js和print.bundle.js两个文件
    app:"./src/index.js",
    print:"./src/print.js"
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')    
  },
  devtool:'inline-source-map',      //这里是开启了错误提示，能够详细的提示你的代码错误位置，生产环境下不要开启
  devServer:{
    contentBase:"./dist"            //这里是服务器的挂载目录，该目录下的所有文件可在浏览器访问
  },
  module:{                          //这里就是模块开启的地方，
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif|svg)$/,
        use:['file-loader']
      }
    ]
  },
  plugins:[                         //插件开启的地方
      new htmlWebpackPlugin({
        title:"songzmin"
      }),
      new cleanWebpackPlugin()      
      
  ]
}