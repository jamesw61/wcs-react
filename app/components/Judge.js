// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component

// TODO:  header 1 needs to contains Round, header 2 contains division (novice, ) and role (lead/follow)
//  Complete the table body

var Judge = React.createClass({

  render: function() {

    return (
      <div className="container">

        <div className="jumbotron">
          <h1 className="text-center">ROUND Competition</h1>
          <h2 className="text-center">  </h2>
        </div>

        <div className="row">
          <div className="col-lg-12">

        <form  action="/contests/{{round}}/{{division}}/{{role}}" method="POST">
          <div className="form-group">
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>HEAT</strong></h3>
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

                </tbody>
                </table>
            
              
            </div>
            </div>
            </div>
            <button className="btn btn-primary" id="score-prelims-btn" type="submit">Submit Scores</button>
        </form>
        </div>

      </div>

    </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Judge;