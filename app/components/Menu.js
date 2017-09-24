import React, {Component} from 'react'
import {Link} from 'react-router'

const Menu = (props) => (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
       

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            {props.loggedin && <ul className="nav navbar-nav navbar-right">
              <li><Link to="/dashboard"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</Link></li>
              <li><Link to="/Participants"><span className="glyphicon glyphicon-cog"></span> Admin </Link> </li>
              <li><Link to="/" onClick={() => props.loggedout(false)  } ><span className="glyphicon glyphicon-log-out"></span> Logout </Link></li> 
            </ul>}

            {!props.loggedin && <ul className="nav navbar-nav navbar-right">
            <li><Link to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            <li><Link to ="/register"><span className="glyphicon glyphicon-user"></span> Register</Link></li>
            </ul>}

          </div>
        </div>
      </nav>
    );
export default Menu;
