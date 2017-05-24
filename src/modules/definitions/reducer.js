import { combineReducers, } from 'redux';
import { DEFINITION_ACTIONS, DEFINITION_REQ_ACTIONS, } from './constants';

const request = (rState = {}, { type, curry, }) =>
  DEFINITION_REQ_ACTIONS.has(type) ? curry(rState) : rState;

const data = (state = [], { type, curry, }) =>
  DEFINITION_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ request, data, });
