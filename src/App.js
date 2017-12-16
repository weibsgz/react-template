import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//路由
import {BrowserRouter,Route,Redirect,Switch,Link} from 'react-router-dom'

import HeaderDiv from 'components/header/header'
import Hello from 'components/hello/hello'
import TestRedux from 'components/testRedux/testRedux'


class App extends Component {
  render() {
    return (
        <div className='testScss'>
          <BrowserRouter>
            <div>
              <HeaderDiv />
              <Route exact path='/testredux' component={TestRedux}/>
              <Route exact path='/hello' component={Hello}/>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
