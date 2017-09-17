// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

// TODO:  header 1 needs to contains Round, header 2 contains level (novice, ) and role (lead/follow)
//  Complete the table body

var Results = React.createClass({

  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center"> Results</h1>
          <h2 className="text-center"> </h2>
         </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              
              <div className="panel-heading">
                <h3 className="panel-title"><strong>Heat One</strong></h3>
               </div>
              
              <div className="panel-body">
                <table className="table table-hover" id='prelim-heatOne'>
                  <thead>
                    <tr>
                      <th>Bib Number</th>
                      <th>Name</th>
                      <th>Judge 1</th>
                      <th>Judge 2</th>
                      <th>Judge 3</th>
                      <th>Total</th>
                    </tr>
                  </thead>
              
                  <tbody>
                     
                  </tbody>
                </table>
            
              
            </div>
            </div>
            </div>
        </div>

    </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;