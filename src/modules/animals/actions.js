import { addSet, removeSet, } from 'fenugreek-collections';
import { ADD_ANIMAL, REMOVE_ANIMAL, RESET_ANIMALS, SET_CURRENT_ANIMAL, } from './constants';

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
