import { combineReducers, } from 'redux';
import { GUESS_ACTIONS, REMAINING_ACTIONS, } from './constants';

// export default (state = new Set([]), { type, curry, }) =>
//   GUESS_ACTIONS.has(type) ? curry(state) : state;
  
const letters = (state = new Set([]), { type, curry, }) =>
    GUESS_ACTIONS.has(type) ? curry(state) : state;
const remaining = (state = 10, { type, curry, }) =>
  REMAINING_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ letters, remaining, });
