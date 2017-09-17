
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';



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
