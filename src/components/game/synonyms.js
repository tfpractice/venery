import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';

const SynonymList = ({ relationshipType, words, }) => (
  <Grid container justify="center">
    <Grid item xs={11}>
      <Text type="subheading">
        {relationshipType}
      </Text>
    </Grid>
    <Grid item xs={11}>
      <Grid container>
        {words.sort((a, b) => a.length - b.length).map((w, j) => (
          <Grid item xs key={j}>
            <Chip label={w} key={w} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
  )

;

export default(SynonymList);
