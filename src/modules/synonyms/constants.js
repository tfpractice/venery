import { rqUtils, } from '../../utils';
const { rqConstants, } = rqUtils;

export const SET_SYNONYMS = 'SET_SYNONYMS';

export const SYNONYM_REQ_ACTIONS = rqConstants('SYNONYM_REQ');
export const SYNONYM_ACTIONS = new Set([
  SET_SYNONYMS,
]);
