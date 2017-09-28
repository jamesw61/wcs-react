import React, { Component } from 'react';

class DancerRow extends Component {
 
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
            <button className="btn btn-default">Edit</button>
           
          </td>
          <td>
            <button className="btn btn-default">Delete</button>
          </td>
        </tr>
    );
  }
 
}
export default DancerRow