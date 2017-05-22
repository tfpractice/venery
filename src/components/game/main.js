import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Word from './word';
const Game = () => (
  <Grid container>
    <Grid item>
      <Text type="title">
        I AM THE GAME BOARD
      </Text>
      <Word />
    </Grid>
  </Grid>
);

export default Game;
