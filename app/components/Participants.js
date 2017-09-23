import React, {Component} from 'react';
import Router, { browserHistory } from'react-router';
import axios from "axios";
var isEmpty = require('lodash.isEmpty');

class Participants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            firstName: "",
            division: "",
            role: "",
            bib_number: "",
            errors: {}   
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        
    }

    handleSubmit (event) {
        // clear the errors in case there are any old errors
        this.setState({ errors: {} });
        event.preventDefault();
        const click = this.props.onClick;

        // Post the information to the server-side
        axios.post("/dancers/participant", this.state)
            .then(response => {
                


                console.log("This is the response data");
                console.log(response.data);

                console.log(!isEmpty(response.data));
            //     // Display error messages
                if(!isEmpty(response.data)){
                    
                    console.log(response.data);
                    this.setState({errors: response.data});
                    console.log(this.state.errors);
                }
                 else {
                    click(true);
                    console.log('posted new dancer'); 
                    browserHistory.push('/dashboard'); 
                }     
            // })
            // .catch(function (error) {
            //     console.log(error);
              });
        
    }

    render () {

        // Set the variable for the errors
        const {errors} = this.state;
       
        return (
        <div className="forms">
            <form onSubmit={this.handleSubmit}>
                <div className='form-group' >
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
                {errors.lastName && <span className="help-block">{errors.lastName}</span>}
                <div className='form-group' >
                    <label>First Name</label>                
                    <input
                        type="text"
                        id='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="first name"
                        name='first_name'/>
                </div>
                 {errors.firstName && <span className="help-block">{errors.firstName}</span>}
               
                <div className='form-group' >
                    <label>Division</label>
                    <input
                        type="text"
                        id='division' 
                        value={this.state.division}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Division"
                        name='division'/>
                </div>
                <div className='form-group'>
                    <label>Role</label>
                    <input
                        type="text"
                        id='role' 
                        value={this.state.role}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Role"
                        name='role'/>
                </div>

                <div className='form-group'>
                    <label>Bib Number</label>
                    <input
                        type="text"
                        id='bib_number' 
                        value={this.state.bib_number}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Bib Number"
                        name='bib_number'/>
                </div>
                 {errors.bib_number && <span className="help-block">{errors.bib_number}</span>}
                <button
                    type="submit"
                    style={{backgroundColor: '#1424E4'}}
                    className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }
};

module.exports = Participants;

