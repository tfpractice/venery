import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';

import { Game as GameMod } from '../../modules';
import Word from './word';

const stateToProps = ({ game: { inPlay }, guesses: { letters }, animals }) => ({
  animals,
  letters: [ ...letters ],
  inPlay,
});

const Game = ({ startGame, inPlay, letters, animals, ...props }) =>
  (<Grid container justify="center" align="center" direction="column">
    <Grid item xs={11}>
      <Word />
    </Grid>
  </Grid>);

export default connect(stateToProps, GameMod.actions)(Game);
