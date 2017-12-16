import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addGunAnsyc,addGun,removeGun} from 'store/test.redux.js'

@connect(
    state => state,
    {addGun,removeGun,addGunAnsyc}
)
class TestRedux extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
         <h1>现在有机枪{this.props.counter}把</h1>
         <button onClick={this.props.addGun}>加机关枪</button>
         <button onClick={this.props.removeGun}>减机关枪</button>
         <button onClick={this.props.addGunAnsyc}>过会加</button>
      </div>
    )
  }
}

export default TestRedux
