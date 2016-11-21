import React from 'react';
import {browserHistory, IndexRoute, Route, Router} from 'react-router'
import Home from '../pages/home/home.js';
import Contact from '../pages/contact/contact.js';
import Projects from '../pages/projects/projects.js';
import NotFound from '../pages/notfound/notfound.js';

const Root = <Router
  history={browserHistory}>
  <Route path='/'>
    <IndexRoute
      component={Home}/>
    <Route
      path='/contact'
      component={Contact}/>
    <Route
      path='/projects'
      component={Projects}/>
    <Route
      path='*'
      component={NotFound}/>
  </Route>
</Router>;

export default Root;