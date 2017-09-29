import React from 'react';
import validateinput from '../actions/validations/login'
import axios from 'axios';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions/authActions'

class Login2 extends React.Component {
	
	//
	// getInitialState: function() {
	//     return {
	//       username: "",
	//       password: ""
	//     };
 //  	},

 	constructor(props) {
 		super(props);
 		this.state = {
 			username: '',
 			password: '',
 			errors: {},
 			isLoading: false

 		};

 		this.handleChange = this.handleChange.bind(this);
 		this.handleSubmit = this.handleSubmit.bind(this);
 	}

 	isValid() {
 		const { errors, isValid } = validateinput(this.state);


 		if(!isValid) {
 			this.setState( {errors});
 		}

 		return isValid;
 	}

 	handleChange(event) {
	    let newState = {};
	    newState[event.target.id] = event.target.value;
	    this.setState(newState);
  	}

  	handleSubmit(event) {
    	event.preventDefault(); 
    	let username = this.state.username;
    	let password = this.state.password;


    	if(this.isValid()) {
    		this.setState({errors: {}, isLoading: true});
    		this.props.login(this.state).then( res =>{

    			 this.context.router.push('/dashboard');
    			// console.log("error");
    			// console.log(err);
    			// console.log("res");
    		});
    			
    			// (res)=>{console.log("This is the res.");
    			// console.log(res);
    			 // this.context.router.push('/dashboard');},
    			// },
    			// (err)=>{
    			// 	console.log("This is the err data."); 
    			// 	console.log(err.data); 
    			// 	this.setState({errors: {form: 'Invalid Credentials'}, isLoading: false})}
    			    			
    			
    	}
  	}

	// Render the html form
	render() {

		const {errors, username, password, isLoading} = this.state;
	
		
		return (
			<div className="container login">
			

			<h2 className='page-header'>Login</h2>

			{ errors.form &&  <div className="alert alert-danger">{errors.form}</div>}
   			<form onSubmit={this.handleSubmit}>
			   <div className="panel panel-primary">
			   <div className="panel-heading">
			   <h3 className="panel-title"><strong>Judge Login</strong></h3>
			   </div>
			   <div className="panel-body">
	    		<div className = 'form-group'>
					<label>Username </label>
					<input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" name="username" />
				</div>
				{errors.username && <span className="help-block">{errors.username}</span>}
				<div className = 'form-group'>
					<label>Password </label>
					<input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password" />
				</div>
				{errors.password && <span className="help-block">{errors.password}</span>}
				<button
				type="submit"
				className="btn btn-default" disabled={isLoading} onClick={this.handleSubmit}>Submit</button>
				</div>
				</div>
			</form>
    
			</div>
			
			);
	}
}

Login2.propTypes = {
	login:  React.PropTypes.func.isRequired
	
}

Login2.contextTypes = {
	router: React.PropTypes.object.isRequired
}



export default connect(null, { login }) (Login2);