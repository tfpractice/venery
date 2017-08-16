import React from 'react';
import Grid from 'material-ui/Grid';

import Letter from './letter';

const CharList = ({ chars }) =>
  (<Grid container align="center" justify="center">
    {chars.map((chr, i) =>
      (<Grid item xs key={i}>
        <Letter chr={chr} />
      </Grid>)
    )}
  </Grid>);

export default CharList;
