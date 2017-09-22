import * as React from "react";
import * as ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import axios from 'axios';
import CoupleRow from './CoupleRow';
import Jumbo from './Jumbo';

export default class Finals extends React.Component {
  constructor() {
    super();
    this.state = {couplesObj : undefined}
  }

  componentDidMount() {
      let queryURL2 = "/finals/" + this.props.params.round + "/" + this.props.params.division;
      axios.get(queryURL2).then(function(couplesData) {
        console.log('couplesData', couplesData);

        console.log('.data', couplesData.data);

        
        this.setState({couplesObj : couplesData.data});   

        console.log('this.state', this.state.couplesObj);    
        
          }.bind(this)).catch(err => {
                  console.log('catch err', err.response);
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
    let coupleRows;
    let couples = this.state.couplesObj;
          if(couples){ 
            console.log('couples', couples);
            
            coupleRows = couples.leadArray.map((item, i)=>{
                    let coupleBibs = { "lead": item.bib_number,
                                      "follow" : couples.followArray[i].bib_number
                                      };
                      return (            
                        <CoupleRow data={coupleBibs} rowKey={i} key={i} />
                             )
                      }); 
          }
    
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
                        {coupleRows}

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