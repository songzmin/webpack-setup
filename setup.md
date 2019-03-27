一，首先应安装最新的node.js
二，安装webpack模块(基础模块)
  ①，npm install --save-dev webpack                 //这里是指项目目录安装，尽量不要全局安装webpack
  ②，npm install --save-dev webpack-cli             //安装webpack的指令模块
  ③，npm install --save-dev lodash                  //安装lodash模块
三，安装webpack的扩展模块
  A，处理css文件模块
    ①，npm install --save-dev style-loader          //处理css文件
    ②，npm install --save-dev css-loader            //①，②两个文件相互依赖
  B, 处理图片的模块
    ①，npm install --save-dev file-loader           //处理图片文件
  C, 处理数据的模块
    ①，json数据直接就可引入使用的
    ②，xml 数据
四，安装webpack的插件
  ①，npm install --save-dev html-webpack-plugin     //自动生成html首页，并自动引入bundle.js
  ②，npm install --save-dev clean-webpack-plugin    //自动删除生成文件夹中无用的文件
五，安装node服务器
  ①，npm install --save-dev webpack-dev-server      //以服务的形式启动工程，实时刷新功能