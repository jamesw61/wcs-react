import React from 'react'
import { Link, browserHistory } from 'react-router'
import axios from 'axios'


export default React.createClass({
    getInitialState: function() {
      return {
        participantData: [],
        participantScores: []
      };
    },
    handleChange: function(event) {    
      let scoresArray = this.state.participantScores;
      
      let index = scoresArray.findIndex(p => p.bib_number === event.target.id);

      scoresArray[index] = {
                    "bib_number" : event.target.id,
                    "score" : event.target.value
      }

      this.setState({participantScores : scoresArray}); 


    },
    componentDidMount: function() {
      // console.log('mount', this.state.participantScores);
      let queryURL = "/contests/judge/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;
      // console.log('query', queryURL);
      axios.get(queryURL).then(function(response) {
        // console.log('evaluation data', response.data[0].bib_number);
        this.setState({ participantData: response.data });


        let initialParticipantScores = this.state.participantData.map((data, i) => {
            let newState = {
                            "bib_number":data.bib_number,
                            "score" : "1"
                          };
            return newState;
        });

        this.setState({ participantScores: initialParticipantScores });
        // console.log('mount', this.state.participantScores);

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
                  console.log('err', err);
                  return err.response;
            });
  },
   handleSubmit: function(event) {
    event.preventDefault(); 
    // console.log('state', this.state);
       let postURL = "/contests/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;

      axios.post(postURL, {scores: this.state.participantScores}).then(function(response) {
        console.log('posted', response);
        browserHistory.push('/dashboard');        
        // axios.get("/contests/judge").then(function(response) {
        //    console.log('res', response.data[0].username);
        //    if(username === response.data[0].username){ 
        //    browserHistory.push('/dashboard');
        //     }            
      // });
 
    });
    
    

  },
  render() {

    let participantRows = this.state.participantData.map((data, i) => {
          return (
              <tr key={i}>
                 <td>{data.bib_number}</td>
                 <td>{data.role}</td>
                 <td>
                      <div className="well">
                                 
                        <select id={data.bib_number} onChange={this.handleChange} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                        </select>
                      </div>     
                   </td>
                </tr>
                    );
                   });

    return (
    <div className='container'>
     
          
        
     
          <form onSubmit={this.handleSubmit}>
          <h2 className="page-header"> Evaluation</h2>
          <h3>{this.props.params.round} / {this.props.params.division} / {this.props.params.role}</h3>
            <div className="form-group">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title"><strong>Heat</strong></h3>
                </div>
              <div className="panel-body">
                <table className="table table-hover table-body" id='prelim-heatOne'>
                            <thead>
                              <tr>
                                <th>Bib Number</th>
                                <th>Role</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                
                            <tbody>
                                  {participantRows}             
                            </tbody>
                </table>              
              </div>
              </div>
              </div>
              <button className="btn btn-default" type="submit">
                Submit Scores
              </button>
          </form>
        </div>
       

     
  )
  }
})

