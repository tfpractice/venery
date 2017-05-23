import React from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { spread, } from 'fenugreek-collections';

import Letter from './letter';

const stateToProps = ({ word, }) => ({ word, chars: spread(word.toUpperCase()), });

const Word = ({ chars, word, }) => (
  <Grid container justify="center" align="center">
    <Grid item sm={12}>
      <Text type="title">
        I AM THE word {word}
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
  </Grid>
);

export default connect(stateToProps)(Word);
