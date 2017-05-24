import { RESET_WORD, } from './constants';
import { actions as DefActs, } from '../definitions';
import { actions as SynActs, } from '../synonyms';
const { getWord, } = DefActs;
const { getSynonyms, } = SynActs;
const reset = word => () => word.toUpperCase();

export const setWord = word =>
({ type: RESET_WORD, curry: reset(word), });

export const resetWord = word => dispatch =>
  Promise.resolve(setWord(word))
    .then(dispatch)
    .then(a => getWord(word))
    .then(dispatch)
    .then(a => getSynonyms(word))
    .then(dispatch)
    .catch(console.error);
