// Include the React library
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";


// Reference the high-level components
import Main from "../components/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import Results from "../components/Results";
import Dashboard from "../components/Dashboard";
import Evaluation from "../components/Evaluation";
import Home from "../components/Home";
import Finals from "../components/Finals";





// Export the Routes
module.exports = (

  // The high level component is the Router component
<Router history={browserHistory}>
    <div>
            <Route path="/" component={Main}>
                <Route path="/login" component={Login}>
                </Route>

                <Route path="/register" component={Register}>
                </Route>

                <Route path="/results" component={Results}>
                </Route>

                <Route path="/dashboard" component={Dashboard}>
                </Route>

                <Route path="/contests/judge/:round/:division/:role" component={Evaluation}>
                </Route>

                <Route path="/contests/results/:round/:division/:role" component={Results}>
                </Route>

                <Route path="/Home" component={Home}>
                </Route>

                <Route path="/finals" component={Finals}>
                </Route>

            </Route>

    

    </div>
  </Router>

);

