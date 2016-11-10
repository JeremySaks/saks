import React from 'react';
import {Provider} from 'react-redux';
import {browserHistory, IndexRoute, Route, Router} from 'react-router'
import store from '../../redux/store.js';
import Home from '../home/home.js';
import NotFound from '../notfound/notfound.js';

const Root = <Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Home}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
</Provider>;

export default Root;