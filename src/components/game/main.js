import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';

import { Animals, } from '../../modules';
import Word from './word';
import GuessForm from './guessform';

const stateToProps = state => state;

const Game = (props) => {
  console.log('props', props);
  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item>
        <Text type="title">
          I AM THE GAME BOARD
        </Text>
        <Button accent raised onClick={() => props.setAnimal(props.animals.all[0])}>
          setCurrentAnimal
        </Button>
      </Grid>
      <Grid item>
        <Word />
        <GuessForm />
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps, Animals.actions)(Game);
