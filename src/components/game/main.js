import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';

import { Animals, } from '../../modules';
import Word from './word';
import GuessForm from './guessform';
import Letter from './letter';

const stateToProps = ({ guesses: { letters, }, animals, }) =>
  ({ animals, letters: [ ...letters, ], });

const Game = ({ newAnimals, letters, animals, ...props }) => {
  // console.log('props', props);
  const a = 0;

  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item>
        <Button accent raised onClick={() => newAnimals()}>
          Start New Game
        </Button>
      </Grid>
      <Grid item>
        <Word />
        <GuessForm />
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

export default connect(stateToProps, Animals.actions)(Game);
