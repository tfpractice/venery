import { actions, } from '../animals';

// export const newAnimals = (animals = getNewAnimals(10)) => (dispatch) => {
import { END_GAME, NEW_GAME, } from './constants';
const { newAnimals, } = actions;

const start = () => state => ({ inPlay: true, });
const end = () => state => ({ inPlay: false, });

export const newGame = () =>
({ type: NEW_GAME, curry: start(), });

export const endGame = () =>
({ type: END_GAME, curry: end(), });

export const startGame = () => dispatch =>
  Promise.resolve(newGame())
    .then(dispatch)
    .then(() => newAnimals())
    .then(dispatch)
    .catch(console.error);
