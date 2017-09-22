import React, {Component} from 'react';
import Router, { browserHistory } from'react-router';
import axios from "axios";

class Participants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            firstName: "",
            division: "",
            role: "",
            bib_number: ""   
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
        event.preventDefault();
        console.log('The Button Has been pushed');
        const click = this.props.onClick;
        console.log("This is what is in " + this.state);
        axios.post("/rich", this.state)
            .then((response) => {
                click(true);
                browserHistory.push('/dashboard');       
            })
            .catch(function (error) {
                console.log(error);
              });
        }

    render () {
       
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