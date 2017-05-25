import axios from 'axios';
import { map, } from 'fenugreek-collections';
import { rqUtils, wordnik, } from '../../utils';
import { SET_TAXA, } from './constants';

const { rqActions, } = rqUtils;
const { requestDef, getDefText, taxData, taxLacksWord, } = wordnik;

const mapTo = fn => coll => map(coll)(fn);
const filterBy = fn => coll => coll.filter(fn);

const taxReqPending = rqActions('TAXA_REQUEST').pending;
const taxReqFailure = rqActions('TAXA_REQUEST').failure;
const taxReqSuccess = rqActions('TAXA_REQUEST').success;

const set = taxs => () => taxs;

export const setTaxa = taxs =>
({ type: SET_TAXA, curry: set(taxs), });

export const getDefintions = word => word;

export const getWord = wrd => dispatch =>
Promise.resolve(taxReqPending(wrd))
  .then(dispatch)
  .then(() => requestDef(wrd))
  .then(filterBy(taxLacksWord(wrd)))
  .then(mapTo(taxData))
  .then(d => d.slice(0, 3))
  .then(setTaxa)
  .then(dispatch)
  
  .catch(e => dispatch(taxReqFailure(e)));
