
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
            </div>
        </div>

    </div>
    )

  }
}
