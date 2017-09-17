// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");


// Components
var Navbar = require("./components/Navbar");
var Main = require("./components/Main");
var Login = require("./components/Login");

ReactDOM.render(
 <div className="main-container">
 	<Main />
 	<Login />
 </div>,
  document.getElementById("app")
);