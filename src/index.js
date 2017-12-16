//系统自带
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'assets/css/index.scss'
//自己引入
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk' //applyMiddleware中间件，redux-thunk处理异步获取
import {Provider} from 'react-redux' //provider 负责把STORE传入到组件中
import combineReducers from 'store/combineReducers' //负责合并reducer

//如果不处理异步 直接const store = createStore(counter)就可以了
//这里用了combineReducer  合并了auth.redux.js index.redux.js里两个reducer

//compose这里这第一参数是异步中间件（不用中间件只能处理同步action，中间件用来处理异步），第二个是chorme插件配置
const store = createStore(combineReducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))
ReactDOM.render(
  (<Provider store={store}>
            <App></App>
         </Provider>),        
        document.getElementById('root')
)
registerServiceWorker();
