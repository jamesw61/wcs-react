import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'





export default React.createClass({
    getInitialState: function() {
      return {
        participantData: ['4']
      };
    },
    handleChange: function(event) {
      let newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },
    componentDidMount: function() {

       let queryURL = "/contests/judge/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;
      console.log('query', queryURL);
      axios.get(queryURL).then(function(response) {
        console.log('evaluation data', response.data[0].bib_number);
        this.setState({ participantData: response.data });
        // this.setState({ participantData: x });
        // this.setState({
        //   judge: response.data
        // });
        // console.log('state judge', this.state.judge);
    // $.get("/contests/judge", function (req, res){
    //   console.log(req);
    //   console.log(res);
    // });
          }.bind(this)).catch(err => {
                  console.log(err.response);
                  return err.response;
            });
  },
   
  render() {
    return (
    
      <div className="row">
          <h1>Evaluation</h1>
      <h2>{this.props.params.round} / {this.props.params.division} / {this.props.params.role}</h2>

        <div className="col-lg-12">

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong>heat</strong></h3>
              </div>
            <div className="panel-body">
              <table className="table table-hover" id='prelim-heatOne'>
                          <thead>
                            <tr>
                              <th>Bib Number</th>
                              <th>Role</th>
                              <th>Score</th>
                            </tr>
                          </thead>
              
                <tbody>
                      {this.state.participantData.map((data, i) => {
                      return (
                            <tr key={i}>
                              <td>{data.bib_number}</td>
                              <td>{data.role}</td>
                              <td>
                              <div className="well">
                                 <b>YES</b>
                                  <input type="text" className="span2 dancer" value="3" name={data.bib_number} id={data.bib_number} onChange={this.handleChange} data-slider-max="3"
                                    data-slider-min="1" />
              
                                  <b>NO</b>
                            </div>

                                
                                    
                              </td>
                            </tr>
                          );
                   })}
               

                </tbody>
                </table>
            
              
            </div>
            </div>
            </div>
            <button className="btn btn-primary" id="score-prelims-btn" type="submit">Submit Scores</button>
        </form>
        </div>
      

      </div>
  )
  }
})

