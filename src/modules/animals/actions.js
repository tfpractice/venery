import { addSet, first, removeSet, spread } from 'fenugreek-collections';
import { animals, callOn, mapTo } from '../../utils';
import { actions } from '../words';
import { actions as TaxActions } from '../taxonomies';

import {
  ADD_ANIMAL,
  REMOVE_ANIMAL,
  RESET_ANIMALS,
  UPDATE_PASSED_ANIMALS,
  SET_CURRENT_ANIMAL,
  UPDATE_CORRECT_ANIMALS,
} from './constants';

const { resetWord } = actions;

const { getTaxa } = TaxActions;
const { getGroupName, getNewAnimals } = animals;

const add = animal => state => spread(addSet(state)(animal));
const remove = animal => state => removeSet(state)(animal);
const set = animals => state => animals || state;

const dropFirst = () => ([ first, ...rest ]) => rest;

const updateCurrent = animal => () => animal;

export const addAnimal = a => ({ type: ADD_ANIMAL, curry: add(a) });

export const removeAnimal = a => ({ type: REMOVE_ANIMAL, curry: remove(a) });

export const setAnimals = animals => ({
  type: RESET_ANIMALS,
  curry: set(animals),
});

export const rotateAnimals = () => ({
  type: RESET_ANIMALS,
  curry: dropFirst(),
});

export const setCurrentAnimal = anim => ({
  type: SET_CURRENT_ANIMAL,
  curry: updateCurrent(anim),
});

export const addCorrect = anim => ({
  type: UPDATE_CORRECT_ANIMALS,
  curry: add(anim),
});

export const addPassed = anim => ({
  type: UPDATE_PASSED_ANIMALS,
  curry: add(anim),
});

const stateAnimals = ({ animals: { all }}) => all;

export const setAnimal = animal => (dispatch) => {
  Promise.resolve(setCurrentAnimal(animal))
    .then(dispatch)
    .then(() => getGroupName(animal))
    .then(w => Promise.all([ resetWord(w), getTaxa(animal) ].map(dispatch)))
    .catch(console.error);
};

export const newAnimals = (animals = getNewAnimals(10)) => dispatch =>
  Promise.resolve(setAnimals(animals))
    .then(dispatch)
    .then(() => first(animals))
    .then(setAnimal)
    .then(dispatch)
    .catch(console.error);

export const turnAnimals = next => (dispatch, getState) => {
  Promise.resolve(rotateAnimals(next))
    .then(dispatch)
    .then(() => first(stateAnimals(getState())))
    .then(setAnimal)
    .then(dispatch)
    .catch(console.error);
};

export const updateCorrect = animal => (dispatch, getState) =>
  Promise.resolve(addCorrect({ animal, word: getState().word }))
    .then(dispatch)
    .then(turnAnimals)
    .then(dispatch);

export const updatePassed = animal => (dispatch, getState) =>
  Promise.resolve(
    addPassed({
      animal,
      word: getState().word,
      letters: [ ...getState().guesses.letters ],
    })
  )
    .then(dispatch)
    .then(turnAnimals)
    .then(dispatch);
