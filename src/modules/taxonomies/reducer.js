import { combineReducers, } from 'redux';
import { TAXA_ACTIONS, TAXA_REQ_ACTIONS, } from './constants';

const request = (rState = {}, { type, curry, }) =>
  TAXA_REQ_ACTIONS.has(type) ? curry(rState) : rState;

const data = (state = [], { type, curry, }) =>
  TAXA_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ request, data, });
