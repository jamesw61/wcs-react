import * as React from "react";
import * as ReactDOM from 'react-dom';
import { browserHistory, Link } from 'react-router';
import Dragula from 'react-dragula';
import axios from 'axios';
import CoupleRow from './CoupleRow';
import Jumbo from './Jumbo';

export default class Finals extends React.Component {
  constructor() {
    super();
    this.state = {couplesObj : undefined}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
      let queryURL2 = "/finals/" + this.props.params.round + "/" + this.props.params.division;
      axios.get(queryURL2).then(function(couplesData) {
        // console.log('couplesData', couplesData);

        // console.log('.data', couplesData.data);

        
        this.setState({couplesObj : couplesData.data});   

        // console.log('this.state', this.state.couplesObj);    
        
          }.bind(this)).catch(err => {
                  console.log('catch err', err.response);
                  return err.response;
            });
     
  }

  handleSubmit (event) {
    event.preventDefault(); 
    let childNodeObj = document.getElementById("list").childNodes;
    childNodeObj = [].slice.call(childNodeObj);
    // console.log('childN', childNodeObj);
    let finalScores = childNodeObj.map(function(item){
      let scoreObj = {
          "lead" : item.dataset.leadid,
          "follow" : item.dataset.followid
      }
      return scoreObj
    });

    console.log('finalscores', finalScores);


    // let division = "novice";
    let division = this.props.params.division;

     axios.post("/finals", {finalScores: finalScores, division: division}).then(function(response) {
        console.log('posted', response);
        browserHistory.push('/dashboard');        
        // axios.get("/contests/judge").then(function(response) {
        //    console.log('res', response.data[0].username);
        //    if(username === response.data[0].username){ 
        //    browserHistory.push('/dashboard');
        //     }            
      // });
 
    });
    // console.log('c', c);
    // console.log('attr', c[0].attributes);
    // console.log('dataset', c[0].dataset);
    // console.log('lead', c[0].dataset.leadid);
    // console.log('follow', c[0].dataset.followid);

                  
  }

  dragulaDecorator (componentBackingInstance) {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  }

  render () {
    let coupleRows;
    let linkURL = "/finalresults/" + this.props.params.division;
    console.log(linkURL);
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
        
              
                      <form onSubmit={this.handleSubmit}>
                        <h2 className='page-header'>Finals</h2>
                        <div className="panel panel-primary">
                          <div className="panel-heading">
                             <h3 className="panel-title"><strong>Rankings</strong></h3>
                         </div>
                         <div className="panel-body">
                            <div className='container' id="list" ref={this.dragulaDecorator}>
                              {coupleRows}
                            </div>
                          </div>
                        </div>
                      <button className="btn btn-default" id="score-prelims-btn" type="submit">Submit Final Order</button>
                      <Link to ="finalresults/advanced"> Final Results</Link>  
                      </form>
                        
                   
              </div>
         
    )
  }
  
}

  // let resultsRows = this.state.followArray.map((item, i)=>{
  //          return (            
  //                 <div className="well" key={i} >Follow: {item}</div>
  //                 )
  //   });