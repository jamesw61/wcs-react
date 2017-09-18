import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Main from '../components/Main'
import Register from '../components/Register'
import Login from '../components/Login'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} />
        
        	<Route path="Login" component={Login} />
        	<Route path="Register" component={Register} />
        

    </Router>
)

export default routes