import { GUESS_WORD, RESET_WORD, } from './constants';

const reset = word => prev => word.toUpperCase();

export const resetWord = word =>
({ type: RESET_WORD, curry: reset(word), });
