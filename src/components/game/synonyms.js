import React from 'react';
import { connect, } from 'react-redux';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';
import Card, { CardContent, CardHeader, } from 'material-ui/Card';

//
// const mapStateToProps = ({ guesses: { letters, }, }, { chr, }) =>
// ({ isGuessed: (letters).has(chr.toUpperCase()), });
//
// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   display: 'inline-block',
//   background: '#666',
// };

const SynonymList = ({ relationshipType, words, }) => (
  
  <Grid container justify="center">
    <Grid item xs={11}>
      <Card >
        <CardHeader title={relationshipType} />
        <CardContent>
          <Grid container>
            {words.sort((a, b) => a.length - b.length).map((w, j) => (
              <Grid item xs>
                <Chip label={w} key={w} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={11}>
      <Text type="button">
        {relationshipType}
      </Text>
    </Grid>
    <Grid item xs={11}>
      <Grid container>
        {words.sort((a, b) => a.length - b.length).map((w, j) => (
          <Grid item xs>
            <Chip label={w} key={w} />
          </Grid>
        ))}
      </Grid>
      
    </Grid>
    
  </Grid>
      
  )

;

// export default connect(mapStateToProps)
export default(SynonymList);
