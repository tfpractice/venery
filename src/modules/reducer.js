import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as animals, } from './animals';

export default combineReducers({ animals, form, });
