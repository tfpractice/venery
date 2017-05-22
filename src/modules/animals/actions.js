import { first, } from 'fenugreek-collections';
import { addSet, removeSet, } from 'fenugreek-collections';
import { ADD_ANIMAL, REMOVE_ANIMAL, RESET_ANIMALS, SET_CURRENT_ANIMAL, } from './constants';
import { animals, } from '../../utils';
import { actions, } from '../words';

const { resetWord, } = actions;
const { ANIMAP, getXRandom, ANIMALS, } = animals;

const add = animal => state => addSet(state)(animal);
const remove = animal => state => removeSet(state)(animal);
const set = animals => () => animals;

export const updateCurrent = animal => () => animal;
export const addAnimal = a =>
  ({ type: ADD_ANIMAL, curry: add(a), });

export const removeAnimal = a =>
  ({ type: REMOVE_ANIMAL, curry: remove(a), });

export const resetAnimals = animals =>
  ({ type: RESET_ANIMALS, curry: set(animals), });

export const setCurrentAnimal = anim =>
({ type: SET_CURRENT_ANIMAL, curry: updateCurrent(anim), });

export const setAnimal = animal => (dispatch) => {
  Promise.resolve(setCurrentAnimal(animal))
    .then(dispatch)
    .then(() => first(ANIMAP.get(animal)))
    .then(w => console.log('first word', w) || w)
    .then(resetWord)
    .then(dispatch)
    .catch(console.error);
};

export const nextAnimals = (next = getXRandom(ANIMALS, 10)) => (dispatch) => {
  Promise.resolve(resetAnimals(next))
    .then(dispatch)
    .then(setAnimal(first(next)))
    .then(dispatch)
    .catch(console.error);
};

// export const updateCorrect = corr => (dispatch, getState) =>
// Promise.resolve(
//   dispatch({ type: UPDATE_CORRECT_ANIMALS, curry: update(corr), }))
//   .then(x => dispatch(resetAnimals(getState().animals.all.slice(1))))
//   .catch(console.error);
