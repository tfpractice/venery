import React from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';

import CharList from './characters';

const newGuess = word => str => !new Set(word).has(str);
const wrongFilter = lSet => word => [ ...lSet ].filter(newGuess(word));
const mapState = ({ guesses, word }) => ({ xGuesses: wrongFilter(guesses.letters)(word) });

const Guesses = ({ xGuesses }) => <CharList chars={xGuesses} />;

export default connect(mapState)(Guesses);
