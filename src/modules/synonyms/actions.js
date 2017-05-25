import axios from 'axios';
import { map, } from 'fenugreek-collections';
import { filtBy, mapTo, rqUtils, wordnik, } from '../../utils';
import { SET_SYNONYMS, } from './constants';

const { rqActions, } = rqUtils;

// const { requestSyn, getSynText, synData, synLacksWord, } = wordnik;
const { requestSyn, hasType, } = wordnik;

//
// const mapTo = fn => coll => map(coll)(fn);
// const filtBy = fn => coll => coll.filter(fn);

const synReqPending = rqActions('SYNONYM_REQUEST').pending;
const synReqFailure = rqActions('SYNONYM_REQUEST').failure;
const synReqSuccess = rqActions('SYNONYM_REQUEST').success;

const set = syns => () => syns;

export const setSyns = syns =>
({ type: SET_SYNONYMS, curry: set(syns), });

// export const getSynonyms = word => word;

export const getSynonyms = wrd => dispatch =>
Promise.resolve(synReqPending(wrd))
  .then(dispatch)
  .then(() => requestSyn(wrd))
  .then(s => console.log('s', s) || s)
  .then(filtBy(hasType))

  // .then(mapTo(synData))
  // .then(d => d.slice(0, 3))
  .then(setSyns)
  .then(dispatch);

//
//   .catch(e => dispatch(synReqFailure(e)));
