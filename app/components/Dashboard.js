// Include React
var React = require("react");
import NavLink from './NavLink'
// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
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
                  
                    <td><NavLink to ="/contests/judge/Preliminary/novice/follow">Judge Follows</NavLink>
                        <br /><NavLink to="/contests/judge/Preliminary/novice/lead">Judge Leads</NavLink>
                    </td>
     
                    <td><NavLink to="/contests/results/Preliminary/novice/follow"> Follows</NavLink>
                        <br /><NavLink to="/contests/results/Preliminary/novice/lead"> Leads</NavLink></td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td><NavLink to="/contests/judge/Preliminary/intermediate/follow">Judge Follows</NavLink>
                        <br /><NavLink to="/contests/judge/Preliminary/intermediate/lead">Judge Leads</NavLink></td>
                    <td><NavLink to="/contests/results/Preliminary/intermediate/follow"> Follows</NavLink>
                        <br /><NavLink to="/contests/results/Preliminary/intermediate/lead"> Leads</NavLink></td>
                  </tr>
                  <tr>
                    <td>Advanced</td>
                    <td><NavLink to="/contests/judge/Preliminary/advanced/follow">Judge Follows</NavLink>
                        <br /><NavLink to="/contests/judge/Preliminary/advanced/lead">Judge Leads</NavLink></td>
                    <td><NavLink to="/contests/results/Preliminary/advanced/follow"> Follows</NavLink>
                        <br /><NavLink to="/contests/results/Preliminary/advanced/lead"> Leads</NavLink></td>
                  </tr>
                  <tr>
                    <td>All-Star</td>
                    <td><NavLink to="/contests/judge/Preliminary/allstar/follow">Judge Follows</NavLink>
                        <br /><NavLink to="/contests/judge/Preliminary/allstar/lead">Judge Leads</NavLink></td>
                    <td><NavLink to="/contests/results/Preliminary/allstar/follow"> Follows</NavLink>
                        <br /><NavLink to="/contests/results/Preliminary/allstar/lead"> Leads</NavLink></td>
                  </tr>
                  <tr>
                    <td>Champion</td>
                    <td><NavLink to="/contests/judge/Preliminary/champion/follow">Judge Follows</NavLink>
                        <br /><NavLink to="/contests/judge/Preliminary/champion/lead">Judge Leads</NavLink></td>
                        <td><NavLink to="/contests/results/Preliminary/champion/follow"> Follows</NavLink>
                        <br /><NavLink to="/contests/results/Preliminary/champion/lead"> Leads</NavLink></td>

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
