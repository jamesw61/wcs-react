// Include React
import React from 'react'
import axios from 'axios'
import NavLink from './NavLink'


// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Navbar = React.createClass({
  getInitialState: function() {
    return {judge: false}
    
  },
  componentDidMount: function() {
        console.log('before', this.state.judge);

    axios.get("/contests/judge").then(function(response) {
        console.log('res', response.data);
        // this.setState({
        //   judge: response.data
        // });
        // console.log('state judge', this.state.judge);
    // $.get("/contests/judge", function (req, res){
    //   console.log(req);
    //   console.log(res);
    // });
  });
  },
  render: function() {
    let nav;
    if(this.state.judge){
      nav = (
        <ul className="nav navbar-nav navbar-right"> 
          <li><NavLink to="/dashboard"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</NavLink></li>
       <li><a href="/users/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
        </ul>
        )
    }else{
      nav = (
        
        <ul className="nav navbar-nav navbar-right"> 
           <li><NavLink to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                          <li><NavLink to ="/register"><span className="glyphicon glyphicon-user"></span> Register</NavLink></li>
        </ul>
        )
    }
    return (
      <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <img alt="Brand" src="./css/JnJ3.png" className="image-responsive logo" />  
                    </a>         
              </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">  
                          {nav}
                </div>
            </div>    
        </nav>
    );
  }
});

// Export the component back for use in other files
module.exports = Navbar;

// <nav className="navbar navbar-default">
//             <div className="container-fluid">
//               <div className="navbar-header">
//                 <a className="navbar-brand" href="#">
//                     <img alt="Brand" src="./css/JnJ3.png" className="image-responsive logo" />  
//                     </a>         
//               </div>

//                 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                         <ul className="nav navbar-nav navbar-right"> 
//                           <li><NavLink to="/dashboard"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</NavLink></li>
//                           <li><a href="/users/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
//                           <li><NavLink to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
//                           <li><NavLink to ="/register"><span className="glyphicon glyphicon-user"></span> Register</NavLink></li>
//                         </ul>
//                 </div>
//             </div>    
//         </nav>


