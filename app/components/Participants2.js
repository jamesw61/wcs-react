import React, {Component} from 'react';
import Router, { browserHistory } from'react-router';
import axios from "axios";
var isEmpty = require('lodash.isEmpty');
import classnames from "classnames";



class Participants extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            firstName: "",
            divisionTypes: [
                'novice',
                'intermediate',
                'advanced',
                'all-star',
                'championship'
            ],
              division: '',
            roleType: [
                'leads',
                'follows'
            ],   
            role:  "",
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

        console.log("Has been submitted.");
        console.log(this.state);
        // Post the information to the server-side
        axios.post("/participants/new", this.state)
            .then(response => {
                


                console.log("This is the response data");
                console.log(response.data);

                console.log(!isEmpty(response.data));
            //     // Display error messages
                if(!isEmpty(response.data)){
                    
                    // console.log(response.data);
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
        const division = this.state.division
        const options = this.state.divisionTypes.map((loan, key) => {
          const isCurrent = this.state.division === loan
          return (
            
            <div 
              key={key} 
              className="radioPad"
            >
              <div>
                <label 
                  className={
                    isCurrent ? 
                      'radioPad__wrapper radioPad__wrapper--selected' :
                      'radioPad__wrapper'
                    }
                >
                  <input
                    className="radioPad__radio"
                    type="radio" 
                    name="divisionTypes" 
                    id={loan} 
                    value={loan}
                    onChange={this.handleRadio.bind(this)}
                  />
                  {loan}
                </label>
              </div>
            </div>
          )
        })
       
        return (
                <div className="forms">
                    <form onSubmit={this.handleSubmit}>
                        
                        <h2 className='page-header'>Dancers</h2>
                        <div className="panel panel-primary">
                        <div className="panel-heading">
                          <h3 className="panel-title"><strong>Add New Participant</strong></h3>
                        </div>
                      <div className="panel-body">
                      <div className= {classnames('form-group',{'has-error': errors.lastName} )} >
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
                        <div className={classnames('form-group',{'has-error': errors.lastName} )} >
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
                    
                        <div className="row">
                        <p className="lead">
                          <strong>{}</strong>
                          {division ? 
                            ', nice pick!' : 'Tap away, friend.'
                          }
                        </p>
                        <hr />
                        {options}
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

                        <div className={classnames('form-group',{'has-error': errors.bib_number} )}>
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
                       
                        </div>
                       
                    </div>
                    <button
                    type="submit"
                    className="btn btn-default" onClick={this.handleSubmit}>Submit
                    </button>
                    </form>
        </div>
        )
    }

}
module.exports = Participants;

