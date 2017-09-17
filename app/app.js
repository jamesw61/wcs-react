// Include the Main React Dependencies
// var React = require("react");
// var ReactDOM = require("react-dom");
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Components
// import Navbar = require("./components/Navbar");
// var Main = require("./components/Main");
// var Login = require("./components/Login");
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';


// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory


// ReactDOM.render(
//  <div className="main-container">
//  	<Main />
//  	<Login />
//  </div>,
//   document.getElementById("app")
// );
const app = document.getElementById('app');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="/login" component={Login}>
			</Route>
			<Route path="/register" component={Register}>
			</Route>

    
     
    </Route>
      
  </Router>,app);

 // <IndexRoute component={Main}/>
 //      	<Route path="/login" component={Login}/>