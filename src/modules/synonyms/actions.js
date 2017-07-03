import axios from 'axios';
import { map, } from 'fenugreek-collections';
import { filtBy, mapTo, rqUtils, wordnik, } from '../../utils';
import { SET_SYNONYMS, } from './constants';
const sortBy = fn => arr => arr.sort(fn);
const compareLength = (a, b) => a.words.length - b.words.length;
const { rqActions, } = rqUtils;

const { requestSyn, hasType, } = wordnik;

const synReqPending = rqActions('SYNONYM_REQUEST').pending;
const synReqFailure = rqActions('SYNONYM_REQUEST').failure;
const synReqSuccess = rqActions('SYNONYM_REQUEST').success;

const set = syns => () => syns;

export const setSyns = syns =>
({ type: SET_SYNONYMS, curry: set(syns), });

export const getSynonyms = wrd => dispatch =>
Promise.resolve(synReqPending(wrd))
  .then(dispatch)
  .then(() => requestSyn(wrd))
  .then(s => console.log('s', s) || s)
  .then(filtBy(hasType))
  .then(sortBy(compareLength))
  .then(setSyns)
  .then(dispatch);
