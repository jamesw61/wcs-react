// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");


// Components
var Navbar = require("./components/Navbar");
var Main = require("./components/Main");
var Login = require("./components/Login");
var Dashboard = require("./components/Dashboard");

ReactDOM.render(
 <div className="main-container">
 	<Navbar />
 	<Main />
 </div>,
  document.getElementById("app")
);
