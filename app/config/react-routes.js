// Include the React library
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/Main";
// import Login from "../components/Login";
import Login from "../components/Login2";
import Register from "../components/Register";
import Results from "../components/Results";
import Dashboard from "../components/Dashboard";
import Evaluation from "../components/Evaluation";
import Home from "../components/Home";
import Finals from "../components/Finals";
import FinalResults from "../components/FinalResults";
import Dancers from "../components/Dancers";
import Participants from "../components/Participants";
import EditParticipant from "../components/EditParticipant";



// Export the Routes
module.exports = (

  // The high level component is the Router component
<Router history={browserHistory}>
    <div>
            <Route path="/" component={Main}>
               

            <IndexRoute component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/results" component={Results} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/contests/judge/:round/:division/:role" component={Evaluation} />
                <Route path="/contests/results/:round/:division/:role" component={Results} />
                <Route path="/participants" component={Participants} /> 
                 <Route path="/finals/:round/:division" component={Finals} />
                 <Route path="/finalresults/:division" component={FinalResults} />     
                 <Route path="/dancers" component={Dancers} />
                 <Route path="/editParticipant"  component={EditParticipant} />
            </Route>
    </div>
  </Router>

);

