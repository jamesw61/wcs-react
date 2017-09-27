
// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import jwt from 'jsonwebtoken';
import {setCurrentUser} from './actions/authActions';
var axios =require('axios');

// // Grabs the Routes
var reactRoutes = require("./config/react-routes");

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

// setAuthorizationToken(localStorage.jwtToken);
if(localStorage.jwtToken) {
	axios.defaults.headers.common['Authorization'] = 'Bearer ${token}';
	store.dispatch(setCurrentUser(jwt.decode(localStorage.jwt)));
} else {
	delete axios.defaults.headers.common['Authorization'];
}

// This is where the routes will be rendered

// // Renders the contents according to the route page.

ReactDOM.render(
	<Provider store={store}>
	<Router history={browserHistory} routes={reactRoutes} />
	</Provider>, document.getElementById('app'));



