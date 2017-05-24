import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect, } from 'react-redux';
import { first, spread, } from 'fenugreek-collections';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';
import Letter from './letter';
import GuessForm from './guessform';

const stateToProps = ({ animals: { all, }, word, definitions: { data, }, synonyms, }) =>
({
 animal: first(all),
 definitions: data,
 word,
 synonyms: synonyms.data,
 chars: spread(word.toUpperCase()),
});

const Word = ({ animal, chars, word, definitions, synonyms, }) => (
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
      <GuessForm />
    </Grid>
    <Grid item sm={12}>
      <Text align="center" type="display3">
        {`of ${animal}`}
      </Text>
    </Grid>
    <Grid item >
      <List dense />
      <ListSubheader primary>
        <Text type="headline">
          Definitions
        </Text>
      </ListSubheader>
      {spread(definitions).map((d, i) => (
        <ListItem key={i} divider>
          <ListItemText primary={d.text} secondary={d.source} />
        </ListItem>
      ))}
    </Grid>

    <Grid item >
      <Grid container>
        {spread(synonyms).map((s, i) => (
          <Grid item key={i}>
            <List >
              <ListSubheader primary>
                <Text type="headline">
                  {s.relationshipType}
                </Text>
              </ListSubheader>
              {s.words.map((w, j) => (
                <ListItem key={j} divider>
                  <ListItemText primary={w} />
                </ListItem>))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default connect(stateToProps)(Word);
