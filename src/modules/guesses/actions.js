import { CORRECT_GUESS, DECREMENT_REMAINING,
   GUESS_ACTIONS,
   GUESS_LETTER,
    INCORRECT_GUESS,
INCREMENT_REMAINING,
REPEAT_GUESS,
 RESET_GUESSES, RESET_REMAINING, } from './constants';

import { actions, } from '../animals';
const { updateCorrect, } = actions;
const dec = () => rem => rem - 1;
const inc = () => rem => rem + 1;
const resetR = num => rem => num;

export const incrementRem = () =>
  ({ type: INCREMENT_REMAINING, curry: inc(), });

export const decrementRem = () => (dispatch, getState) =>
  Promise.resolve(dispatch({ type: DECREMENT_REMAINING, curry: dec(), }))
    .then((x) => {
      console.log('x', getState().remaining);
      
      // dispatch(setStatus(getState().remaining < 1));
    });

export const resetRem = num =>
  ({ type: RESET_REMAINING, curry: resetR(num), });

const add = str => ltrs => new Set(ltrs).add(str.toUpperCase());
const resetL = str => ltrs => new Set();
const unknowns = getState => new Set(
  (getState().word.toUpperCase().split(''))
    .filter(c => !getState().guesses.letters.has(c.toUpperCase())));

const correctGuess = guess => getState =>
unknowns(getState).has(guess.toUpperCase()) ||
  getState().guesses.letters.has(guess.toUpperCase());

export const guess = str =>
  ({ type: GUESS_LETTER, curry: add(str), });

const newGuess = guess => (unk) => {
  console.log('unk', unk);
  return unk.has(guess.toUpperCase());
};

export const resetGuesses = () =>
  ({ type: RESET_GUESSES, curry: resetL(), });

const allGuessed = getState => unknowns(getState).size === 0;

export const guessLetter = str => (dispatch, getState) => {
  if (correctGuess(str)(getState)) {
    dispatch(guess(str));
    if (allGuessed(getState)) {
      dispatch(updateCorrect(getState().animals.all[0]));
    }
  } else {
    dispatch(guess(str));
    
    dispatch(decrementRem());
  }
};

export const guessForm = ({ guess, }) => {
  console.log('guess', guess);
  guessLetter(guess);
};
