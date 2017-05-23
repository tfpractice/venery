import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect, } from 'react-redux';
import { first, spread, } from 'fenugreek-collections';

import Letter from './letter';

const stateToProps = ({ animals: { all, }, word, }) => ({ animal: first(all), all, word, chars: spread(word.toUpperCase()), });

const Word = ({ animal, chars, word, }) => (
  <Grid container justify="center" direction="column" align="center">
    <Grid item sm={12}>
      <Text align="center" type="display3">
        {word}
      </Text>
      <Text align="center" type="display3">
        a
      </Text>
    </Grid>
    <Grid item>
      <Grid container justify="center" direction="row" >
        {chars.map((chr, i) => (
          <Grid item key={i}>
            <Letter chr={chr} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item sm={12}>
      <Text align="center" type="display3">
        of                                                                                                                                                        {animal}
      </Text>
    </Grid>
  </Grid>
);

export default connect(stateToProps)(Word);
