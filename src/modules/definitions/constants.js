import { rqUtils, } from '../../utils';
const { rqConstants, } = rqUtils;

export const SET_DEFINITIONS = 'SET_DEFINITIONS';
export const GET_DEFINITIONS = 'GET_DEFINITIONS';

export const DEFINITION_REQ_ACTIONS = rqConstants('DEFINITION_REQ');
export const DEFINITION_ACTIONS = new Set([
  SET_DEFINITIONS,
  GET_DEFINITIONS,
]);
