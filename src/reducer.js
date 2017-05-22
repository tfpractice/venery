import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { Animals, Guesses, Words, } from './modules';

const { reducer: animals, } = Animals;
const { reducer: guesses, } = Guesses;
const { reducer: word, } = Words;

export default combineReducers({ animals, form, word, guesses, });
