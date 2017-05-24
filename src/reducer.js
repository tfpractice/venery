import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { Animals, Definitions, Guesses, Words, } from './modules';

const { reducer: animals, } = Animals;
const { reducer: guesses, } = Guesses;
const { reducer: word, } = Words;
const { reducer: definitions, } = Definitions;

export default combineReducers({
 animals, form, word, guesses, definitions,
});
