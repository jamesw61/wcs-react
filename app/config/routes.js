// Include the React library
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


// Reference the high-level components
import Main from "../components/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import Results from "../components/Results";
import Judge from "../components/Judge";
import Dashboard from "../components/Dashboard";


// Export the Routes
module.exports = (

  // The high level component is the Router component
<Router history={hashHistory}>
    <div>
    <Route path="/" component={Main}>
    </Route>

    <Route path="/login" component={Login}>
    </Route>

    <Route path="/dashboard" component={Dashboard}>
    </Route>

    <Route path="/judge" component={Judge}>
    </Route>

    <Route path="/register" component={Register}>
    </Route>

    <Route path="/results" component={Results}>
    </Route>

    </div>
  </Router>

);