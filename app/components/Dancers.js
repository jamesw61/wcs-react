import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';
import TableRow from './DancerRow';


  class Dancers extends Component {
    constructor(props) {
      super(props);
        this.state = {resultsArray: []}
        }
  
    componentDidMount() {
        
       
          axios.get('/participants/list')
            
            .then(response => {
              this.setState({resultsArray : response.data});   
              console.log("this.state", this.state.resultsArray);   
            })
            .catch(function (error) {
                console.log(error);
              })
            }

            tabRow(){
                if(this.state.resultsArray instanceof Array){
                  return this.state.resultsArray.map(function(object, i){
                      return <TableRow obj={object} key={i} />;
                  })
                }
              }
  
             
        render() {
            return (
              <div className="container">
              <button className="btn btn-default addNew" onClick={this.handleSubmit}>Add new Participants</button>
              <h2 className="page-header">Participants</h2>
              
              <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>Dancer Info</strong>
                </h3>
              </div>
              <div className="panel-body">
                <table className="table table-hover">
  
                    <thead>
                      <tr>
                        <td>Bib Number</td>
                        <td>Last Name</td>
                        <td>First Name</td>
                        <td>Division</td>
                        <td>Role</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.tabRow()}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
            );
          }
        }
      
      export default Dancers;