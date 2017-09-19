import React, {Component} from 'react'
import Menu from './Menu'
import {Link} from 'react-router'
class Main extends Component{
 
      render() {
        return (
          <div className="container-fluid main" >
              <Menu />

    <div className="container-fluid">
        <br />
        {this.props.children}
    </div>
</div>

    )
  }
}

export default Main;

