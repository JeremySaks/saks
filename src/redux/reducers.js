import {initial} from './initial.js';

export default (state = initial, action) => {
  try {
    const {type} = action;
    switch (type){
      default: return state;
    }
  } catch(e){
    return state;
  }
};