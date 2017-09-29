import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import TableRow from './TableRow';
import Jumbo from './Jumbo';
import Finals from './Finals';
import FinalRow from './FinalRow';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {resultsObj : {},
                  resultsArray : []}
                  
  }

  componentDidMount() {
      let queryURL = "/finalresults/" + this.props.params.division;
      axios.get(queryURL).then(function(response) {
          console.log("final places", response.data);
          // this.setState({ resultsObj: response.data});
          let resultsArray = [];
          for (let place in response.data.finalPlacement){
            resultsArray.push(response.data.finalPlacement[place]);
          }
          console.log('ra', resultsArray);
          this.setState({ resultsArray: resultsArray});
          console.log('this.state', this.state.resultsArray);
        
          }.bind(this)).catch(err => {
                  console.log(err);
                  // return err.response;
            });
      
  }

  render() {
    let resultsRows = this.state.resultsArray.map((item, i)=>{
           return (            
                  <FinalRow data={item} rowKey={i} key={i} />
                  )
    });
    //let resultsRows = this.state.resultsArray.map((item, i)=>{
    //       return (            
      //            )
    //});



    return (

      <div className="container">
        <h2>Final Results</h2>


        <div className="row">
             <div className="col-lg-12">
               <table className="table table-hover table-body">
                <thead>
         
                 {resultsRows}
                 </thead>
               </table>       
          </div>
        </div>
      </div>
    
    )

  }
}