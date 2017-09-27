import React, {Component} from 'react'

class Home extends Component{
 
      render() {
        return (
          <div className="container" >
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <img src="./css/JnJ3.png" className="img-responsive logo" alt="logo" />
              </div>
              <div className="col-md-7">
                <h1 className="home">West Coast Swing</h1>
              </div>
              
              </div>
              
              <div className="row silhouette">
                <div className="col-md-12 swing">            
                  <img src="../images/swing-dancers-rev.png" className="img-responsive" alt="silhouette" />
                </div>
              </div>
            </div>
        )}   
    }
    
export default Home;     