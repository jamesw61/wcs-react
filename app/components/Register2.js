var React = require('react');
var Router = require('react-router')
var axios = require("axios");
import { browserHistory } from 'react-router';

class Register2 extends React.Component {
// var Register = React.createClass({

    
    constructor(props) {
        super(props);
        this.state = {
            lastName : '',
            firstName: '',
            userName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        // Set the user name to the name given in the form
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        console.log(this.state);
        // axios.post("/users/register", {last_name: last_name, 
        //                            first_name: first_name,
        //                            username: username,
        //                            email: email,
        //                            password: password,
        //                            password2: password2 }).then(function(response) {
        //                                                         console.log('post register'); 
        // browserHistory.push('/dashboard');       
                                                                 

        //                                                     });
    }

    // handleChange(event) {

    //     var newState = {};
    //     newState[event.target.id] = event.target.value;
    //     this.setState(newState);
    // }

    // handleSubmit(event) {
    //     event.preventDefault(); 
    //     let last_name = this.state.lastName;
    //     let first_name = this.state.firstName;
    //     let username = this.state.userName;
    //     let email = this.state.email;
    //     let password = this.state.password;
    //     let password2 = this.state.confPass

    //     console.log('username', username);
    //     console.log('password', password);

    //     axios.post("/users/register", {last_name: last_name, 
    //                                first_name: first_name,
    //                                username: username,
    //                                email: email,
    //                                password: password,
    //                                password2: password2 }).then(function(response) {
    //                                                             console.log('post register'); 
    //     browserHistory.push('/dashboard');       
                                                                 

    //                                                         });

    // } 


    // <div className='form-group' style={style}>
    //                 <label>Last Name
    //                 </label>
    //                 <input
    //                     type="text"
    //                     id='lastName'
    //                     value={this.state.lastName}
    //                     onChange={this.handleChange}
    //                     className="form-control"
    //                     placeholder="Last name"
    //                     name='lastname'/>
    //             </div>
    //             <div className='form-group' style={style}>
    //                 <label>First Name
    //                 </label>
    //                 <input
    //                     type="text"
    //                      id='firstName'
    //                     value={this.state.firstName}
    //                     onChange={this.handleChange}
    //                     className="form-control"
    //                     placeholder="first name"
    //                     name='firstname'/>
    //             </div>
    //             <div className='form-group' style={style}>
    //                 <label>Username
    //                 </label>
    //                 <input
    //                     type="text"
    //                     id='userName' 
    //                     value={this.state.userName}
    //                     onChange={this.handleChange}
    //                     className="form-control"
    //                     placeholder="Username"
    //                     name='username'/>
    //             </div>

    render() {
        const style = {
            color: '#ccc'
        };
        return (
        <div className="forms">
            <form onSubmit={this.handleSubmit}>
             
                <div className='form-group' style={style}>
                    <label>Last Name
                    </label>
                    <input
                        type="text"
                        id='firstName' 
                        value={this.state.lasttName}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Last Name"
                        name='lastName'/>
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
                        placeholder="First Name"
                        name='firstName'/>
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
                        name='userName'/>
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
}

Register2.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}
// };
export default Register2;
// module.exports = Register;