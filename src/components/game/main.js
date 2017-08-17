import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';

import { Game as GameMod } from '../../modules';
import Word from './word';
import NullWord from './nullWord';

const stateToProps = ({ ...state, word }) => ({ word });

const Game = ({ word }) =>
  (<Grid container justify="center" align="center" direction="column">
    <Grid item xs={11}>
      {word ? <Word /> : <NullWord />}
    </Grid>
  </Grid>);

export default connect(stateToProps, GameMod.actions)(Game);
