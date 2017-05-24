import { RESET_WORD, } from './constants';
import { actions, } from '../definitions';
const { getWord, } = actions;
const reset = word => () => word.toUpperCase();

export const setWord = word =>
({ type: RESET_WORD, curry: reset(word), });

export const resetWord = word => dispatch =>
  Promise.resolve(setWord(word))
    .then(dispatch)
    .then(a => getWord(word))
    .then(dispatch)
    .catch(console.error);
