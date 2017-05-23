import { combineReducers, } from 'redux';
import { GUESS_ACTIONS, REMAINING_ACTIONS, } from './constants';

const letters = (state = new Set([]), { type, curry, }) =>
    GUESS_ACTIONS.has(type) ? curry(state) : state;
    
const remaining = (state = 10, { type, curry, }) =>
  REMAINING_ACTIONS.has(type) ? curry(state) : state;

const reducer = combineReducers({ letters, remaining, });

export { reducer as default, };
