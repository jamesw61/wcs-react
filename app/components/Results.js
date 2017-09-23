<<<<<<< HEAD
import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'

export default React.createClass({
  getInitialState: function () {
    return {dataReceived: false, resultsArray: []}

  },
  componentDidMount: function () {
    let queryURL = "/contests/results/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;
    console.log('query', queryURL);
    axios
      .get(queryURL)
      .then(function (response) {
        console.log('results data', response.data);
        this.setState({resultsArray: response.data});
        console.log('rsltArr', this.state.resultsArray);
        this.setState({dataReceived: true});
        console.log('datarec', this.state.dataReceived);

      }.bind(this))
      .catch(err => {
        console.log(err.response);
        return err.response;
      });
  },
  render() {
    return (

      <div className="container-fluid">

        <div className="jumbotron">
          <h1 className="text-center">{this.props.params.round}
            Results</h1>
          <h2 className="text-center">{this.props.params.division} {this.props.params.role}</h2>
        </div>

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>Heat One</strong>
                </h3>
              </div>
              <div className="panel-body">
                <table className="table table-hover" id='prelim-heatOne'>
                  <thead>
                    <tr>
                      <th>Bib Number</th>
                      <th>Name</th>
                      <th>Judge 1</th>
                      <th>Judge 2</th>
                      <th>Judge 3</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this
                      .state
                      .resultsArray
                      .map((item, i) => {
                        return (
                          <tr key={i}>
                            <td>{item.bib_number}</td>
                            <td>{item.name}</td>
                            <td>{item.judge1}</td>
                            <td>{item.judge2}</td>
                            <td>{item.judge3}</td>
                            <td>{item.total}</td>
                          </tr>
                        )

                      })}

                  </tbody>
                </table>

              </div>
=======

import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import TableRow from './TableRow';
import Jumbo from './Jumbo';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {resultsArray : []};
  }
 
  componentDidMount() {
      let queryURL = "/contests/results/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;
      axios.get(queryURL).then(function(response) {
        console.log(response.data);
        
        this.setState({resultsArray : response.data});       
        
          }.bind(this)).catch(err => {
                  console.log(err.response);
                  return err.response;
            });
  }

  render() {

    let resultsRows = this.state.resultsArray.map((item, i)=>{
           return (            
                  <TableRow data={item} rowKey={i} key={i} />
                  )
    });

        return (

       <div className="container">

       <Jumbo round={this.props.params.round} division={this.props.params.division} role={this.props.params.role} />
      
      <div className="row">
        <div className="col-lg-12">
              <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title"><strong>Heat One</strong></h3>
                      </div>
                      <div className="panel-body">
                            <table className="table table-hover" id='prelim-heatOne'>

                                <thead>
                                  <tr>
                                    <th>Bib Number</th>
                                    <th>Name</th>
                                    <th>Judge 1</th>
                                    <th>Judge 2</th>
                                    <th>Judge 3</th>
                                    <th>Total</th>
                                  </tr>
                                </thead>

                                <tbody>
                                      {resultsRows}                        
                                </tbody>

                            </table>          
                      </div>
                </div>
>>>>>>> development
            </div>
          </div>
        </div>

<<<<<<< HEAD
      </div>
    )

  }
})
=======
    </div>
    )

  }
}
>>>>>>> development
