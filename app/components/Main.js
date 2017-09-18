// var React = require("react");
import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
<div className="container-fluid">

        <nav className="navbar-toggler nav navbar-default">
            
        

                <div className="navbar-toggler">
                        <ul className="nav navbar-nav navbar-right"> 
                          <li><NavLink to="/dashboard"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</NavLink></li>
                          <li><a href="/users/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                          <li><NavLink to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                          <li><NavLink to ="/register"><span className="glyphicon glyphicon-user"></span> Register</NavLink></li>
                        </ul>
                </div>        
        </nav>


    <div className="container">
        <br />
        {this.props.children}
    </div>
</div>

      
    )
  }
})

