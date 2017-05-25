import axios from 'axios';
import { map, } from 'fenugreek-collections';
import { rqUtils, wordnik, } from '../../utils';
import { SET_TAXA, } from './constants';
import { getSpecies, } from '../../utils/taxonomy';

const { rqActions, } = rqUtils;

//
// const mapTo = fn => coll => map(coll)(fn);
// const filtBy = fn => coll => coll.filter(fn);

const taxReqPending = rqActions('TAXA_REQUEST').pending;
const taxReqFailure = rqActions('TAXA_REQUEST').failure;
const taxReqSuccess = rqActions('TAXA_REQUEST').success;

const set = taxs => () => taxs;

export const setTaxa = taxs =>
({ type: SET_TAXA, curry: set(taxs), });

export const getTaxa = animal => dispatch =>
Promise.resolve(taxReqPending(animal))
  .then(dispatch)
  .then(() => getSpecies(animal))
  .then(sp => console.log('sp', sp) || sp)
  .then(d => d.slice(0, 3))
  .then(setTaxa)
  .then(dispatch)
  .catch(e => dispatch(taxReqFailure(e)));
