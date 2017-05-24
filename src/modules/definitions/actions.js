import axios from 'axios';
import { map, } from 'fenugreek-collections';
import { rqUtils, wordnik, } from '../../utils';
import { SET_DEFINITIONS, } from './constants';

const { rqActions, } = rqUtils;
const { requestDef, getDefText, defData, defLacksWord, } = wordnik;

const mapTo = fn => coll => map(coll)(fn);
const filterBy = fn => coll => coll.filter(fn);

const defReqPending = rqActions('DEFINITION_REQUEST').pending;
const defReqFailure = rqActions('DEFINITION_REQUEST').failure;
const defReqSuccess = rqActions('DEFINITION_REQUEST').success;

const set = defs => () => defs;

export const setDefs = defs =>
({ type: SET_DEFINITIONS, curry: set(defs), });

export const getDefintions = word => word;

export const getWord = wrd => dispatch =>
Promise.resolve(defReqPending(wrd))
  .then(dispatch)
  .then(() => requestDef(wrd))
  .then(filterBy(defLacksWord(wrd)))
  .then(mapTo(defData))
  .then(d => d.slice(0, 3))
  .then(setDefs)
  .then(dispatch)
  
  .catch(e => dispatch(defReqFailure(e)));
