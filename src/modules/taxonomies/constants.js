import { rqUtils, } from '../../utils';
const { rqConstants, } = rqUtils;

export const SET_TAXA = 'SET_TAXA';

export const TAXA_REQ_ACTIONS = rqConstants('TAXA_REQ');
export const TAXA_ACTIONS = new Set([
  SET_TAXA,
]);
