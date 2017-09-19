import React, {Component} from 'react'

import {Link} from 'react-router'
class Menu extends Component{
 
      render() {
        return (         

            <nav className="navbar-toggler nav navbar-default">  
                <div className="navbar-toggler">
                        <ul className="nav navbar-nav navbar-right"> 
                          <li><Link to="/dashboard"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</Link></li>
                          <li><Link to="/home"><span className="glyphicon glyphicon-log-out"></span> Logout </Link></li>
                          <li><Link to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                          <li><Link to ="/register"><span className="glyphicon glyphicon-user"></span> Register</Link></li>
                        </ul>
                </div>        
        </nav>


    )
  }
}

export default Menu;
