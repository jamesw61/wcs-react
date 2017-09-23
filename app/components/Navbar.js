// Include React
var React = require("react");
var axios = require("axios");



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
        <div> 
          <li role="presentation" className="teal"><a className="teal" href="/"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</a></li>
          <li role="presentation"><a href="/users/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
        </div>
        )
    }else{
      nav = (
        <div>

          <li role="presentation"><a href="/users/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          <li role="presentation"><a href="/users/register"><span className="glyphicon glyphicon-user"></span> Register</a></li>
        </div>
        )
    }
    return (
      <nav>
          <ul className="nav nav-pills pull-right teal" >
            {nav}
          </ul>

        </nav>
    );
  }
});

// // Export the component back for use in other files
module.exports = Navbar;

