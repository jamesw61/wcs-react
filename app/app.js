

// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// // Grabs the Routes
var routerRoutes = require("./config/routerRoutes");

// This is where the routes will be rendered

// // Renders the contents according to the route page.

ReactDOM.render(routerRoutes, document.getElementById('app'));
