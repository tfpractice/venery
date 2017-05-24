import { combineReducers, } from 'redux';
import { SYNONYM_ACTIONS, SYNONYM_REQ_ACTIONS, } from './constants';

const request = (rState = {}, { type, curry, }) =>
  SYNONYM_REQ_ACTIONS.has(type) ? curry(rState) : rState;

const data = (state = [], { type, curry, }) =>
  SYNONYM_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ request, data, });
