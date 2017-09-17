var React = require("react");
var Link = require("react-router").Link;

// Include Child
var Navbar = require("./Navbar");
var Login = require("./Login");

var Main = React.createClass({

  render: function(){

    return(
    <div className="main-container">
      <Navbar />
    
            <Link to="/login"><button className="btn btn-default">Login</button></Link>
            <Link to="/dashboard"><button className="btn btn-default">Dashboard</button></Link>
            <Link to="/register"><button className="btn btn-default">Register</button></Link>
            <Link to="/judge"><button className="btn btn-default">Judge</button></Link>
            <Link to="/results"><button className="btn btn-default">Results</button></Link>
    </div>
    )
}
});

module.exports = Main;