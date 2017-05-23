// import { actions, } from '../guesses';
import { GUESS_WORD, RESET_WORD, } from './constants';

// import { Guesses, } from '../';
// import { resetGuesses, } from '../guesses/actions';

// console.log('Guesses', Guesses);

// const { actions: { resetGuesses, }, } = Guesses;
const reset = word => () => word.toUpperCase();

export const setWord = word =>
({ type: RESET_WORD, curry: reset(word), });

export const resetWord = word => dispatch =>
Promise.resolve(setWord(word))
  .then(dispatch)

  // .then(resetGuesses)
  // .then(dispatch)
  .catch(console.error);
