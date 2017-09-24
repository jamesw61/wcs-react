import React from 'react'
import axios from 'axios';
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

    	console.log('username/password:', username, password);
    	// console.log('password', password);
    	// this.setState({ fireRedirect: true })
  
	const click = this.props.onClick;
    axios.post("/users/login", {username: this.state.username, password: this.state.password}).then((response) => {
		click(true);
		console.log('post login');
		
		// click(true);
        axios.get("/contests/judge").then(function(response) {
			// click(true);
       		 console.log('judge username:', response.data[0].username);
           if(username === response.data[0].username){ 
			
           browserHistory.push('/dashboard');
            }            
  		});
 
  	});
    
    

  },
  render: function(){
	// console.log(this.props);
    return(

<div className="forms">

			<h2 className='page-header'>Login</h2>
   			<form onSubmit={this.handleSubmit}>

	    		<div className = 'form-group'>
					<label>Username </label>
					<input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" name="username" />
				</div>
				<div className = 'form-group'>
					<label>Password </label>
					<input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password" />
				</div>
				<button
				type="submit"
				className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
			</form>
    
</div>
    )
}
});

export default Login;