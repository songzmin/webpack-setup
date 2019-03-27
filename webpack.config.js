const path=require("path");
const htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  entry:{
    app:"./src/index.js",
    print:"./src/print.js"
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  devtool:'inline-source-map',
  devServer:{
    contentBase:"./dist"
  },
  module:{
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
  plugins:[
      new htmlWebpackPlugin({
        title:"songzmin"
      })
  ]
}