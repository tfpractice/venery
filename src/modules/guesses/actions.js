import { actions } from '../animals';
import {
  DECREMENT_REMAINING,
  GUESS_LETTER,
  INCREMENT_REMAINING,
  RESET_GUESSES,
  RESET_REMAINING,
} from './constants';

const { updateCorrect, updatePassed } = actions;
const dec = () => rem => rem - 1;
const inc = () => rem => rem + 1;
const resetR = num => rem => num;

export const incrementRem = () => ({ type: INCREMENT_REMAINING, curry: inc() });

export const decreaseRem = () => ({ type: DECREMENT_REMAINING, curry: dec() });

export const resetRem = num => ({ type: RESET_REMAINING, curry: resetR(num) });

export const decrementRem = () => (dispatch, getState) =>
  Promise.resolve(decreaseRem()).then(dispatch);

const add = str => ltrs => new Set(ltrs).add(str.toUpperCase());

const resetLetters = str => ltrs => new Set();

const unknowns = getState =>
  new Set(
    getState().word
      .toUpperCase()
      .split('')
      .filter(c => !getState().guesses.letters.has(c.toUpperCase()))
  );

const correctGuess = guess => getState =>
  unknowns(getState).has(guess.toUpperCase()) ||
  getState().guesses.letters.has(guess.toUpperCase());

export const guess = str => ({ type: GUESS_LETTER, curry: add(str) });

export const resetGuesses = () => ({
  type: RESET_GUESSES,
  curry: resetLetters(),
});

const allGuessed = getState => unknowns(getState).size === 0;

const guessedAll = () => (dispatch, getState) =>
  Promise.resolve(getState().animals.all[0])
    .then(updateCorrect)
    .then(dispatch)
    .then(resetGuesses)
    .then(dispatch);

const rightGuess = str => (dispatch, getState) =>
  Promise.resolve(guess(str))
    .then(dispatch)
    .then(() => allGuessed(getState))
    .then(bool => bool && dispatch(guessedAll()));

const wrongGuess = str => (dispatch, getState) =>
  Promise.resolve(guess(str))
    .then(dispatch)
    .then(decrementRem)
    .then(dispatch)
    .then(
      x =>
        !getState().guesses.remaining &&
        dispatch(updatePassed(getState().animals.current))
          .then(resetGuesses)
          .then(dispatch)
    );

export const guessLetter = str => (dispatch, getState) => {
  Promise.resolve(correctGuess(str)(getState))
    .then(bool => (bool ? rightGuess(str) : wrongGuess(str)))
    .then(dispatch);
};

export const guessForm = ({ guess }) => {
  console.log('guess', guess);
  guessLetter(guess);
};
