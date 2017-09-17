import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Register from '../components/Register';
// var Saved = require('../components/Login');

const Routes = () => (
<Router history={hashHistory} >
  <Route path='/' component={Main}>
    <IndexRoute component={Register} />  
  </Route>
</Router>
);
export default Routes;