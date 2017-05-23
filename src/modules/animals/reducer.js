import { combineReducers, } from 'redux';
import { animals, } from '../../utils';
import { ANIMAL_ACTIONS, CORRECT_ANIMAL_ACTIONS, CURRENT_ANIMAL_ACTIONS,
  PASSED_ANIMAL_ACTIONS, } from './constants';

const { ANIMALS, getXRandom, } = animals;

const all = (state = getXRandom(ANIMALS, 10), { type, curry, }) =>
ANIMAL_ACTIONS.has(type) ? curry(state) : state;

const correct = (state = [], { type, curry, }) =>
CORRECT_ANIMAL_ACTIONS.has(type) ? curry(state) : state;

const passed = (state = [], { type, curry, }) =>
PASSED_ANIMAL_ACTIONS.has(type) ? curry(state) : state;

const current = (state = '', { type, curry, }) =>
CURRENT_ANIMAL_ACTIONS.has(type) ? curry(state) : state;

const reducer = combineReducers({ all, current, correct, passed, });

export { reducer as default, };
