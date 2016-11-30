import React from 'react';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import Home from '../pages/home/home.js';
import Contact from '../pages/contact/contact.js';
import Projects from '../pages/projects/projects.js';
import NotFound from '../pages/notfound/notfound.js';

const {NODE_ENV} = process.env;

const initializeAnalytics = () => {
  if (NODE_ENV === 'development') return;
  window.ga = () => {
    (window.ga.q = window.ga.q || []).push(arguments);
  };
  const {ga} = window;
  ga.l =+ new Date();
  ga('create', 'UA-88258965-1', 'auto');
  ga('set', 'page', window.location.pathname);
  ga('send', 'pageview');
}

const trackAnalytics = ({pathname}) => {
  if (NODE_ENV === 'development') return;
  const {ga} = window;
  if (!ga) return;
  ga('set', 'page', pathname);
  ga('send', 'pageview');
}

window.onload = initializeAnalytics;

browserHistory.listen(trackAnalytics);

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