### 安装步骤

1.create-react-app 项目名称

2.npm run eject

3.npm install redux react-redux redux-thunk(处理异步中间件)

4.npm install --save react-router-dom

更改别名 `config/webpak.config.dev.js    config/webpack.config.prod.js`


npm install sass-loader node-sass webpack --save-dev

 更改配置`config/webpak.config.dev.js    config/webpack.config.prod.js`


 安装装饰器 为了可以用@connect
 npm install babel-plugin-transform-decorators-legacy --save-dev
 修改package.json中的babel配置
 ```
 "babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    "transform-decorators-legacy"
  ]
},
 ```

