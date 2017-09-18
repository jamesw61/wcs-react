// var React = require("react");
import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
<div className="main-container">

        <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <img alt="Brand" src="./css/JnJ3.png"  />  
                    </a>         
              </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right"> 
                          <li>><NavLink to="/dashboard"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</NavLink></li>
                          <li><a href="/users/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                          <li><NavLink to ="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                          <li><NavLink to ="/register"><span className="glyphicon glyphicon-user"></span> Register</NavLink></li>
                        </ul>
                </div>
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



// var Main = React.createClass({

//   render: function(){

//     return(


//     <div className="main-container">

//         <nav className="navbar navbar-default">
//             <div className="container-fluid">
//               <div className="navbar-header">
//                 <a className="navbar-brand" href="#">
//                     <img alt="Brand" src="./css/JnJ3.png"  />  
//                     </a>         
//               </div>

//                 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                         <ul className="nav navbar-nav navbar-right"> 
//                           <li>><a href="/"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</a></li>
//                           <li><a href="/users/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
//                           <li><a href="#Main"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
//                           <li><a href="#Register"><span className="glyphicon glyphicon-user"></span> Register</a></li>
//                         </ul>
//                 </div>
//             </div>    
//         </nav>


//     <div className="container">
//         <br />
//         {this.props.children}
//     </div>
// </div>
//     )
// }
// });

// module.exports = Main;



