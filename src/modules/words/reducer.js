import { combineReducers, } from 'redux';
import { WORD_ACTIONS, } from './constants';

const reducer = (state = '', { type, curry, }) =>
  WORD_ACTIONS.has(type) ? curry(state) : state;

export { reducer as default, };
