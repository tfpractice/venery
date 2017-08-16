import { actions as DefActs } from '../definitions';
import { actions as SynActs } from '../synonyms';
import { RESET_WORD } from './constants';

const { getDefs } = DefActs;
const { getSynonyms } = SynActs;

const reset = word => () => (word ? word.toUpperCase() : '');

export const setWord = word => ({ type: RESET_WORD, curry: reset(word) });

export const resetWord = word => dispatch =>
  Promise.resolve(setWord(word))
    .then(dispatch)
    .then(() => Promise.all([ getDefs(word), getSynonyms(word) ].map(dispatch)))
    .catch(console.error);
