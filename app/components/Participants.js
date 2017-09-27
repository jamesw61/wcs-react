import React, {Component} from 'react';
import Router, { browserHistory } from'react-router';
import axios from "axios";
// var isEmpty = require('lodash.isEmpty');
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
                'allstar',
                'championship'
            ],
              division: 'novice',

            roleType: [
                'follow',
                'lead'
            ],   
            role:  "follow",

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
    handleRadio(event) {
        this.setState({ division: event.target.value })
    }

    handleRole (event) {
        this.setState({ role: event.target.value })
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

                // console.log(!lodash.isEmpty(response.data));
            //     // Display error messages
                // if(!isEmpty(response.data)){
                    
                //     // console.log(response.data);
                //     this.setState({errors: response.data});
                //     console.log(this.state.errors);
                // }
                 // else {
                    click(true);
                    console.log('posted new dancer'); 
                    browserHistory.push('/dashboard'); 
                // }     
            // })
            // .catch(function (error) {
            //     console.log(error);
              });
        
    }

    render () {

        // Set the variable for the errors
        const {errors} = this.state;
        const division = this.state.division
        const role = this.state.role

        const options = this.state.divisionTypes.map((loan, key) => {
        const isCurrent = this.state.division === loan
          return (
            
            <div  key={key} className="radioPad">
              <div>
                <label 
                  className={
                    isCurrent ? 
                      'radioPad __wrapper radioPad __wrapper--selected' :
                      'radioPad __wrapper'
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

        const Roptions = this.state.roleType.map((loan, key) => {
            const RisCurrent = this.state.role === loan
              return (
                
                <div  key={key} className="radioPad">
                  <div>
                    <label 
                      className={
                        RisCurrent ? 
                          'radioPad __wrapper radioPad __wrapper--selected' :
                          'radioPad __wrapper'
                        }
                    >
                      <input
                        className="radioPad__radio"
                        type="radio" 
                        name="roleTypes" 
                        id={loan} 
                        value={loan}
                        onChange={this.handleRole.bind(this)}
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

                        <div className={classnames('form-group',{'has-error': errors.firstName} )} >
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
                    
                        <div className="form-group">
                          <label>Division</label>
                            <div className="radioGroup">
                                {options}
                            </div>     
                        </div>

                        <div className="form-group">
                        <label>Role</label>
                          <div className="radioGroup">
                              {Roptions}
                          </div>
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

