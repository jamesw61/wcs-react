// Include React
var React = require("react");
import {Link} from 'react-router';

var Dashboard = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.object
  // },
  // handleSubmit(event) {
  //   event.preventDefault()
  //   const userName = event.target.elements[0].value
  //   const repo = event.target.elements[1].value
  //   const path = `/repos/${userName}/${repo}`
  //   this.context.router.push(path)
  //   console.log(path)
  // },

  render: function() {

  let table;
  table = (
    <table className="table table-hover">
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
                  
                    <td><Link to ="/contests/judge/Preliminary/novice/follow">Judge Follows</Link>
                        <br /><Link to="/contests/judge/Preliminary/novice/lead">Judge Leads</Link>
                    </td>
     
                    <td><Link to="/contests/results/Preliminary/novice/follow"> Follows</Link>
                        <br /><Link to="/contests/results/Preliminary/novice/lead"> Leads</Link></td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td><Link to="/contests/judge/Preliminary/intermediate/follow">Judge Follows</Link>
                        <br /><Link to="/contests/judge/Preliminary/intermediate/lead">Judge Leads</Link></td>
                    <td><Link to="/contests/results/Preliminary/intermediate/follow"> Follows</Link>
                        <br /><Link to="/contests/results/Preliminary/intermediate/lead"> Leads</Link></td>
                  </tr>
                  <tr>
                    <td>Advanced</td>
                    <td><Link to="/contests/judge/Preliminary/advanced/follow">Judge Follows</Link>
                        <br /><Link to="/contests/judge/Preliminary/advanced/lead">Judge Leads</Link></td>
                    <td><Link to="/contests/results/Preliminary/advanced/follow"> Follows</Link>
                        <br /><Link to="/contests/results/Preliminary/advanced/lead"> Leads</Link></td>
                  </tr>
                  <tr>
                    <td>All-Star</td>
                    <td><Link to="/contests/judge/Preliminary/allstar/follow">Judge Follows</Link>
                        <br /><Link to="/contests/judge/Preliminary/allstar/lead">Judge Leads</Link></td>
                    <td><Link to="/contests/results/Preliminary/allstar/follow"> Follows</Link>
                        <br /><Link to="/contests/results/Preliminary/allstar/lead"> Leads</Link></td>
                  </tr>
                  <tr>
                    <td>Champion</td>
                    <td><Link to="/contests/judge/Preliminary/champion/follow">Judge Follows</Link>
                        <br /><Link to="/contests/judge/Preliminary/champion/lead">Judge Leads</Link></td>
                        <td><Link to="/contests/results/Preliminary/champion/follow"> Follows</Link>
                        <br /><Link to="/contests/results/Preliminary/champion/lead"> Leads</Link></td>

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
          <div className="panel-body table-body">
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
