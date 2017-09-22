import * as React from "react";
import * as ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

export default class Finals extends React.Component {
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
                        <div className='well'><h3>Couple 1</h3></div>
                        <div className='well'>Couple 2</div>
                        <div className='well'>Couple 3</div>
                        <div className='well'>Couple 4</div>
                        <div className='well'>Couple 5</div>
                        <div className='well'>Swap things around</div>
                        <div className='well'>Swap everything around</div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
    </div>
    )
  }
  
}

