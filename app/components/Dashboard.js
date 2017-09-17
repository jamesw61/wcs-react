// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Dashboard = React.createClass({

  render: function() {

  let table;
  table = (
    <table className="table table-hover" id='employee-table'>
                <thead>
                  <tr>
                    <th>Contest Name</th>
                    <th>Preliminary Round</th>
                    <th>Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Novice</td>
                  
                    <td><a href="/contests/judge/Preliminary/novice/follow">Judge Follows</a>
                        <br /><a href="/contests/judge/Preliminary/novice/lead">Judge Leads</a>
                    </td>
     
                    <td><a href="/contests/results/Preliminary/novice/follow"> Follows</a>
                        <br /><a href="/contests/results/Preliminary/novice/lead"> Leads</a></td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td><a href="/contests/judge/Preliminary/intermediate/follow">Judge Follows</a>
                        <br /><a href="/contests/judge/Preliminary/intermediate/lead">Judge Leads</a></td>
                    <td><a href="/contests/results/Preliminary/intermediate/follow"> Follows</a>
                        <br /><a href="/contests/results/Preliminary/intermediate/lead"> Leads</a></td>
                  </tr>
                  <tr>
                    <td>Advanced</td>
                    <td><a href="/contests/judge/Preliminary/advanced/follow">Judge Follows</a>
                        <br /><a href="/contests/judge/Preliminary/advanced/lead">Judge Leads</a></td>
                    <td><a href="/contests/results/Preliminary/advanced/follow"> Follows</a>
                        <br /><a href="/contests/results/Preliminary/advanced/lead"> Leads</a></td>
                  </tr>
                  <tr>
                    <td>All-Star</td>
                    <td><a href="/contests/judge/Preliminary/allstar/follow">Judge Follows</a>
                        <br /><a href="/contests/judge/Preliminary/allstar/lead">Judge Leads</a></td>
                    <td><a href="/contests/results/Preliminary/allstar/follow"> Follows</a>
                        <br /><a href="/contests/results/Preliminary/allstar/lead"> Leads</a></td>
                  </tr>
                  <tr>
                    <td>Champion</td>
                    <td><a href="/contests/judge/Preliminary/champion/follow">Judge Follows</a>
                        <br /><a href="/contests/judge/Preliminary/champion/lead">Judge Leads</a></td>
                        <td><a href="/contests/results/Preliminary/champion/follow"> Follows</a>
                        <br /><a href="/contests/results/Preliminary/champion/lead"> Leads</a></td>

                  </tr>
                </tbody>
              </table>
  )

    return (
    <div className="container">
    <div className="header clearfix">
      <div id="judge-homepage">
        <h2 className='page-header'>Dashboard</h2>
        <div className="row-fluid">
          <div className="span3 dashbard-section-container">

          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>Contests</strong></h3>
            </div>
          <div className="panel-body">
            {table}
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Dashboard;
