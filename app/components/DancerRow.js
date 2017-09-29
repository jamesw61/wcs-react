import React, { Component } from 'react';
import Router, { browserHistory } from'react-router';

class DancerRow extends Component {

  handleEditClick  () {
    browserHistory.push('/editParticipant');
  }
 
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.bib_number}
          </td>
          <td>
            {this.props.obj.lastname}  
          </td>
          <td>
          {this.props.obj.firstname}
        </td>
        <td>
          {this.props.obj.division}
        </td>
        <td>
          {this.props.obj.role}
         </td>   
          <td>
            <button className="btn btn-default" onClick={this.handleEditClick}>Edit</button>
           
          </td>
          <td>
            <button className="btn btn-default">Delete</button>
          </td>
        </tr>
    );
  }
 
}
export default DancerRow