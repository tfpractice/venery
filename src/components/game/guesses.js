import React from 'react';
import Grid from 'material-ui/Grid';
import { connect, } from 'react-redux';
import CharList from './characters';

const newGuess = word => str => !new Set(word).has(str);

const stateToProps = ({ guesses: { letters, }, word, }) => ({ xGuesses: [ ...letters, ].filter(newGuess(word)), });

const Guesses = ({ xGuesses, }) => (
  <CharList chars={xGuesses} />

);

export default connect(stateToProps)(Guesses);
