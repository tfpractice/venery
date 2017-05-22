import { combineReducers, } from 'redux';
import { ANIMAL_ACTIONS, } from './constants';
import { animals, } from '../../utils/animals';

const { ANIMALS, getXRandom, } = animals;

export const all = (state = getXRandom(ANIMALS, 10), { type, curry, }) =>
ANIMAL_ACTIONS.has(type) ? curry(state) : state;

//
// const correct = (state = [], { type, curry, }) =>
// CORRECT_ANIMAL_ACTIONS.has(type) ? curry(state) : state;
//
// const passed = (state = [], { type, curry, }) =>
// PASSED_ANIMAL_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ all, });
