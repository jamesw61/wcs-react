import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import TableRow from './TableRow';
import Jumbo from './Jumbo';
import Finals from './Finals'

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {resultsArray : []}
                  
  }

  componentDidMount() {
      let queryURL = "/finalresults/";
      axios.get(queryURL).then(function(response) {
        // console.log("results response", response.data);
        
        
          }.bind(this)).catch(err => {
                  console.log(err.response);
                  return err.response;
            });

      
  }

  render() {

    //let resultsRows = this.state.resultsArray.map((item, i)=>{
    //       return (            
      //            )
    //});



    return (

      <div className="container">
        <h2>Final Results</h2>


        <div className="row">
             <div className="col-lg-12">
         
                  <table className="table table-hover" id='prelim-heatOne'>

                       <thead>
                              <tr>
                                <th>Lead</th>
                                <th>Follow</th>
                              
                              </tr>
                        </thead>

                        <tbody>
                        </tbody>

                  </table> 

                      
          </div>
        </div>
      </div>
    
    )

  }
}