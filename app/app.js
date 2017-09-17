
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// import Main from './components/Main';
// import Login from './components/Login';
// import Register from './components/Register';



// const app = document.getElementById('app');

// ReactDOM.render(
// 	<Router history={browserHistory}>
// 		<Route path="/" component={Main}>
// 			<Route path="/login" component={Login}>
// 			</Route>
// 			<Route path="/register" component={Register}>
// 			</Route>

    
     
//     </Route>
      
//   </Router>,app);


// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// // Grabs the Routes
var routerRoutes = require("./config/routerRoutes");

// This is where the routes will be rendered
const app = document.getElementById('app');

// // Renders the contents according to the route page.
ReactDOM.render(routerRoutes, app);
