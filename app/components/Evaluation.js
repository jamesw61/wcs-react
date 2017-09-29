import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router'
import axios from 'axios'
import Slider from 'react-rangeslider'


export default React.createClass({
    getInitialState: function() {
      return {
        participantData: [],
        participantScores: [],
        volume: 1
      };
    },

    handleChangeStart() {
      console.log('Change event started')
    },
  
   
  
    handleChangeComplete() {
      console.log('Change event completed')
    },

    handleChange: function(data, score) { 


      var bibnumber = data.bib;
      var score = score.toString();
      console.log(score);
      this.setState({
      volume: score
      });   

      let scoresArray = this.state.participantScores;
      console.info(this.state.participantScores);
      let index = scoresArray.findIndex(p => p.bib_number === bibnumber);

      scoresArray[index] = {
          "bib_number" : bibnumber,
          "score" : score
      }

      console.log(scoresArray);
      this.setState({participantScores : scoresArray}); 


    },
    componentDidMount: function() {
      // console.log('mount', this.state.participantScores);
      let judge = localStorage.getItem("username");
      let queryURL = "/contests/" + judge + "/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;
      // console.log('query', queryURL);
      axios.get(queryURL).then(function(response) {
        // console.log('evaluation data', response.data[0].bib_number);
        this.setState({ participantData: response.data });


        let initialParticipantScores = this.state.participantData.map((data, i) => {
            let newState = {
              "bib_number":data.bib_number,
              "score" : "1",
            };
            return newState;
        });

        this.setState({ participantScores: initialParticipantScores });

          }.bind(this)).catch(err => {
                  console.log('err', err);
                  return err.response;
            });
  },
   handleSubmit: function(event) {
    event.preventDefault(); 
    // console.log('state', this.state);
      let judge = localStorage.getItem("username");
       let postURL = "/contests/" + judge + "/" + this.props.params.round + "/" + this.props.params.division + "/" + this.props.params.role;

      axios.post(postURL, {scores: this.state.participantScores}).then(function(response) {
        console.log('posted', response);
        browserHistory.push('/dashboard');        
 
    });
    
    

  },
  render() {
    const { value } = this.state;

    let participantRows = this.state.participantData.map((data, i) => {
          return (
              <tr key={i}>
                 <td>{data.bib_number}</td>
                 <td>{data.role}</td>
                 <td>
                      <div className=" well slider">
                                 
                        <Slider 
                        id={data.bib_number}  
                        min={1}
                        max={3}
                        value={value}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChange.bind(this, {bib: data.bib_number})}
                        onChangeComplete={this.handleChangeComplete}
                      />
                      
                      </div>     
                   </td>
                </tr>
                    );
                   }, this);

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