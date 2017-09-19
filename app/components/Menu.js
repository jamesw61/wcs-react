import React, {Component} from 'react'

import {Link} from 'react-router'
class Menu extends Component{

  constructor(){
    super();
    this.state = {
      judge: true
    }
  }
 
      render() {
        return (         

          <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                  <img alt="Brand" src="./css/JnJ3.png"  />  
                  </a>         
            </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                      {this.state.judge && 
                      <ul className="nav navbar-nav navbar-right"> 
                        <li><a href="/"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</a></li>
                        <li><a href="/users/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                      </ul>}

                      {!this.state.judge && 
                      <ul className="nav navbar-nav navbar-right"> 
                          <li><a href="#Main"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                          <li><a href="#Register"><span className="glyphicon glyphicon-user"></span> Register</a></li>
                      </ul>}

              </div>
          </div>    
      </nav>


    )
  }
}

export default Menu;
