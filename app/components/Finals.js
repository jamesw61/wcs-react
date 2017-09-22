import * as React from "react";
import * as ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import axios from 'axios';
import TableRow from './TableRow';
import Jumbo from './Jumbo';

export default class Finals extends React.Component {
  constructor() {
    super();
    this.state = {followArray : [], leadArray: [] };
  }

  componentDidMount() {
      let queryURL = "/finals/" + this.props.params.round + "/" + this.props.params.division + "/follow";
      axios.get(queryURL).then(function(followData) {
        console.log('followData', followData.data);

        
        this.setState({followArray : followData.data});   

        console.log('this.state.follow', this.state.followArray);    
        
          }.bind(this)).catch(err => {
                  console.log(err.response);
                  return err.response;
            });

        let queryURL2 = "/finals/" + this.props.params.round + "/" + this.props.params.division + "/lead";
        axios.get(queryURL2).then(function(leadData) {
        console.log('leadData', leadData.data);

        
        this.setState({leadArray : leadData.data});   

        console.log('this.state.lead', this.state.leadArray);    
        
          }.bind(this)).catch(err => {
                  console.log(err.response);
                  return err.response;
            });
  }

  dragulaDecorator (componentBackingInstance) {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  }

  render () {
  
    
    return (
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
              <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title"><strong>Finals</strong></h3>
                      </div>
                      <div className="panel-body">
                        <div className='container' ref={this.dragulaDecorator}>
                          <div className='well'>Couple 4</div>
                          <div className='well'>Couple 5</div>

                      </div>
                    </div>
                 </div>
              </div>
          </div>
    </div>
    )
  }
  
}

  // let resultsRows = this.state.followArray.map((item, i)=>{
  //          return (            
  //                 <div className="well" key={i} >Follow: {item}</div>
  //                 )
  //   });