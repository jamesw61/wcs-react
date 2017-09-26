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
    this.state = {couplesObj : []}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
      let queryURL2 = "/finals/" + this.props.params.round + "/" + this.props.params.division;
      axios.get(queryURL2).then(function(data) {
        console.log('data', data);

        let queryURL3 = "/finals/couples/" + this.props.params.round + "/" + this.props.params.division;
        axios.get(queryURL3).then(function(couplesData){
            console.log("cd", couplesData.data);
            this.setState({couplesObj : couplesData.data}); 
            console.log('couple array', this.state.couplesObj);

        }.bind(this)).catch(err => {
                  console.log('catch err', err.response);
                  return err.response;
            });

        
        

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

    // console.log('finalscores', finalScores);


    // let division = "novice";
    let division = this.props.params.division;
      let judge = localStorage.getItem("username");

     axios.post("/finals/" + judge, {finalScores: finalScores, division: division}).then(function(response) {
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
    let couples = this.state.couplesObj;
          if(couples){ 
            console.log('couples', couples);
            
            coupleRows = couples.map((item, i)=>{
                    let coupleBibs = { "lead": item.lead,
                                      "follow" : item.follow
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
                      <button className="btn btn-primary" id="score-prelims-btn" type="submit">Submit Final Order</button>
                      <Link to ="/finalresults/advanced"> Final Results</Link>  
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