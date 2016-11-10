import {createStore, combineReducers} from 'redux';
import app from './reducers.js';

export default createStore(
  combineReducers({app}),
  window.devToolsExtension && window.devToolsExtension()
);