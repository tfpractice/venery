import React from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { spread, } from 'fenugreek-collections';
import Letter from './letter';

const stateToProps = ({ word, }) => ({ chars: spread(word.toUpperCase()), });

const Word = ({ chars, }) => (
  <Grid container>
    <Grid item>
      <Text type="title">
        I AM THE word
      </Text>
      {chars.map((chr, i) => <Letter key={i} chr={chr} />)}
    </Grid>
  </Grid>
);

export default connect(stateToProps)(Word);
