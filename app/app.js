// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// // Grabs the Routes
var routes = require("./config/routes");

// This is where the routes will be rendered
const app = document.getElementById('app');

// // Renders the contents according to the route page.
ReactDOM.render(routes, app);