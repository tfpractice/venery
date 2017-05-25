import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { Animals, Definitions, Game, Guesses, Synonyms, Words, } from './modules';

const { reducer: animals, } = Animals;
const { reducer: game, } = Game;
const { reducer: guesses, } = Guesses;
const { reducer: word, } = Words;
const { reducer: definitions, } = Definitions;
const { reducer: synonyms, } = Synonyms;

export default combineReducers({
 animals, form, word, guesses, game, definitions, synonyms,
});
