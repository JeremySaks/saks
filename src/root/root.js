import React from 'react';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import ReactGA from 'react-ga';
import Home from '../pages/home/home.js';
import Contact from '../pages/contact/contact.js';
import Projects from '../pages/projects/projects.js';
import NotFound from '../pages/notfound/notfound.js';

ReactGA.initialize('UA-88258965-1');

const logPageView =() => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}

const Root = <Router
  history={browserHistory}
  onUpdate={logPageView}>
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