import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { Animals, } from './modules';

const { reducer: animals, } = Animals;

export default combineReducers({ animals, form, });
