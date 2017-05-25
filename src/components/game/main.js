import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';

import { Game as GameMod, } from '../../modules';
import Word from './word';
import Letter from './letter';

const stateToProps = ({ game: { inPlay, }, guesses: { letters, }, animals, }) =>
  ({ animals, letters: [ ...letters, ], inPlay, });

const Game = ({ startGame, inPlay, letters, animals, ...props }) => {
  // console.log('props', props);
  const a = 0;

  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item>
        <Button accent raised onClick={startGame}>
          Start New Game
        </Button>
      </Grid>
      <Grid item>
        <Word />
        <Grid container>
          {letters.map((chr, i) => (
            <Grid item key={i}>
              <Letter chr={chr} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps, GameMod.actions)(Game);
