var React = require('react');
// var Router = require('react-router')
var axios = require("axios");
import { browserHistory } from 'react-router';

var Login = React.createClass({
	getInitialState: function() {
	    return {
	      username: "",
	      password: ""
	    };
  	},
	handleChange: function(event) {
	    let newState = {};
	    newState[event.target.id] = event.target.value;
	    this.setState(newState);
  	},
  handleSubmit: function(event) {
    event.preventDefault(); 
    let username = this.state.username;
    let password = this.state.password;

    console.log('username', username);
    console.log('password', password);
    // this.setState({ fireRedirect: true })

    axios.post("/users/login", {username: this.state.username, password: this.state.password}).then(function(response) {
        console.log('post login');

        axios.get("/contests/judge").then(function(response) {
       		 console.log('res', response.data[0].username);
           if(username === response.data[0].username){ 
           browserHistory.push('/dashboard')
            }            
  		});
 
  	});
    
    

  },
  render: function(){
    return(

<div>

			<h2 className='page-header'>Login</h2>
   			<form onSubmit={this.handleSubmit}>

            	<div className="alert alert-success"></div>
    
	    		<div className = 'form-group'>
					<label>Username </label>
					<input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" name="username" />
				</div>
				<div className = 'form-group'>
					<label>Password </label>
					<input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password" />
				</div>
    			<button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
			</form>
    
</div>
    )
}
});

module.exports = Login;