var React = require('react');
var Router = require('react-router')

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

    // handleSubmit: function () {

    //     this
    //         .props
    //         .updateSearch(this.state.search, this.state.start, this.state.end);
    //     return false;
    // },

    render: function () {
        const style = {
            color: '#ccc'
        };
        return (

            <form method="post" action='/users/register'>
                <div className='form-group' id='lastName' style={style}>
                    <label>Last Name
                    </label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        className="form-control"
                        placeholder="last name"
                        name='last_name'/>
                </div>
                <div className='form-group' id='firstName' style={style}>
                    <label>First Name
                    </label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        className="form-control"
                        placeholder="first name"
                        name='first_name'/>
                </div>
                <div className='form-group' id='userName' style={style}>
                    <label>Username
                    </label>
                    <input
                        type="text"
                        value={this.state.userName}
                        className="form-control"
                        placeholder="Username"
                        name='username'/>
                </div>
                <div className='form-group' id='email' style={style}>
                    <label>Email
                    </label>
                    <input
                        type="email"
                        value={this.state.email}
                        className="form-control"
                        placeholder="Email"
                        name='email'/>
                </div>

                <div className='form-group' id='password' style={style}>
                    <label>Password
                    </label>
                    <input
                        type="password"
                        value={this.state.password}
                        className="form-control"
                        placeholder="Password"
                        name='password'/>
                </div>
                <div className='form-group' id='confPass' style={style}>
                    <label>Confirm Password
                    </label>
                    <input
                        type="password"
                        value={this.state.confPass}
                        className="form-control"
                        placeholder="Password"
                        name='password2'/>
                </div>
                <button
                    type="submit"
                    style={{backgroundColor: '#1424E4'}}
                    className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
});

export default Register;