import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import TableRow from './TableRow';

import Finals from './Finals'

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {resultsArray : []}
                  
  }

  componentDidMount() {
      let queryURL = "/results/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;
      axios.get(queryURL).then(function(response) {
        // console.log("results response", response.data);
        
        this.setState({resultsArray : response.data});   
        console.log("this.state", this.state.resultsArray);    
        
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
    let round = this.props.params.round;
    let division = this.props.params.division;
    let role = this.props.params.role;

    let finalsURL = '/finals/' + round + '/' + division;

    return (

      <div className="container">
      <h2 className="page-header"> Results</h2>
      <h3>
        Round: {this.props.params.round} /
        Division: {this.props.params.division} /
        Role: {this.props.params.role}
      </h3>

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
                  {resultsRows}
                </tbody>

                            </table> 

                                
                      </div>
                </div>
            </div>
          </div>
        </div>
    
    )

  }
}