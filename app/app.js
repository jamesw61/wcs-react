// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");


// Components
var Navbar = require("./components/Navbar");
var Login = require("./components/Login");

ReactDOM.render(
 <div className="main-container">
 	<Navbar />
 	<Login />
 </div>,
  document.getElementById("app")
);