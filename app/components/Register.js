var React = require('react');
var Router = require('react-router')
var axios = require("axios");
import { browserHistory } from 'react-router';


var Register = React.createClass({

    getInitialState: function () {
        return {
            lastName: "",
            firstName: "",
            userName: "",
            email: "",
            password: "",
            confPass: ""
        }
    },

    handleChange: function (event) {

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    handleSubmit: function(event) {
        event.preventDefault(); 
        let last_name = this.state.lastName;
        let first_name = this.state.firstName;
        let username = this.state.userName;
        let email = this.state.email;
        let password = this.state.password;
        let password2 = this.state.confPass

        console.log('username', username);
        console.log('password', password);
        const click = this.props.onClick;
        axios.post("/users/register", {last_name: last_name, 
                                   first_name: first_name,
                                   username: username,
                                   email: email,
                                   password: password,
                                   password2: password2 }).then((response) => {
                                    click(true);
                                    console.log(errors);
                                    // ()=> {},
                                    // ({ data }) => this.setState({errors: datt})
                                    console.log('post register'); 
                                    browserHistory.push('/dashboard');       
                                                                 

                                                            });

  },

    render: function () {
        const style = {
            color: '#ccc'
        };
        return (
        <div className="forms">
            <form onSubmit={this.handleSubmit}>
                <div className='form-group' style={style}>
                    <label>Last Name </label>
                    <input
                        id='lastName' 
                        type="text"
                        value={this.state.lastName}
                        className="form-control"
                        onChange={this.handleChange}
                        placeholder="last name"
                        name='last_name'/>
                </div>
                <div className='form-group' style={style}>
                    <label>First Name
                    </label>
                    <input
                        type="text"
                         id='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="first name"
                        name='first_name'/>
                </div>
                <div className='form-group' style={style}>
                    <label>Username
                    </label>
                    <input
                        type="text"
                        id='userName' 
                        value={this.state.userName}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Username"
                        name='username'/>
                </div>
                <div className='form-group' style={style}>
                    <label>Email
                    </label>
                    <input
                        type="email"
                        id='email' 
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Email"
                        name='email'/>
                </div>

                <div className='form-group' style={style}>
                    <label>Password
                    </label>
                    <input
                        type="password"
                        id='password' 
                        value={this.state.password}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Password"
                        name='password'/>
                </div>
                <div className='form-group' style={style}>
                    <label>Confirm Password
                    </label>
                    <input
                        type="password"
                        id='confPass' 
                        value={this.state.confPass}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Password"
                        name='password2'/>
                </div>
                <button
                    type="submit"
                    style={{backgroundColor: '#1424E4'}}
                    className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }
});

module.exports = Register;