import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

class HeaderDiv extends Component{
    
    render(){
        return (
                <div>
                    <h2>这是header组件</h2>
                    <Link to='/hello'>hello</Link>
                    <Link to='/testredux'>test redux</Link>
                </div>
        )
    }
}

export default HeaderDiv
