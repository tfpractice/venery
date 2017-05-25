import axios from 'axios';
import { rqUtils, wordnik, } from '../../utils';
import { SET_DEFINITIONS, } from './constants';

const { rqActions, } = rqUtils;
const { requestDef, } = wordnik;

const defReqPending = rqActions('DEFINITION_REQUEST').pending;
const defReqFailure = rqActions('DEFINITION_REQUEST').failure;
const defReqSuccess = rqActions('DEFINITION_REQUEST').success;

const set = defs => () => defs;

export const setDefs = defs =>
({ type: SET_DEFINITIONS, curry: set(defs), });

export const getDefs = wrd => dispatch =>
Promise.resolve(defReqPending(wrd))
  .then(dispatch)
  .then(() => requestDef(wrd))
  .then(d => d.slice(0, 3))
  .then(setDefs)
  .then(dispatch)
  
  .catch(e => dispatch(defReqFailure(e)));
