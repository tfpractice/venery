import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect, } from 'react-redux';
import { first, spread, } from 'fenugreek-collections';

import GuessForm from './guessform';
import SynonymList from './synonyms';
import Guesses from './guesses';
import DefinitionList from './definitions';
import CharList from './characters';

const stateToProps = ({ animals: { all, }, guesses: { letters, }, word, definitions: { data, }, synonyms, }) =>
({
 animal: first(all),
 definitions: data,
 word,
 letters: [ ...letters, ],
 synonyms: synonyms.data,
 chars: spread(word.toUpperCase()),
});

const Word = ({ animal, chars, word, letters, definitions, synonyms, }) => (
  <Grid container justify="center" align="center">
    <Grid item xs={12}>
      <Text align="center" type="display3">
        {word}
      </Text>
      <Text align="center" type="display3">
        a
      </Text>
    </Grid>
    <Grid item xs={11}>
      <CharList chars={chars} />
    </Grid>
    <Grid item xs={12}>
      <Text align="center" type="display3">
        {`of ${animal}`}
      </Text>
    </Grid>
    <Grid item xs={12}>
      <GuessForm />
    </Grid>
    <Grid item xs={11}>
      <Guesses />
    </Grid>
    <Grid item xs={11}>
      <Grid container>
        <Grid item xs={11} sm={6} >
          <DefinitionList definitions={definitions} />
        </Grid>
        <Grid item xs sm={6} >
          <Grid container justify="center">
            <Grid item xs={11} >
              <Text color="accent" align="center" type="headline">
                Related Words
              </Text>
            </Grid>
            {synonyms.map(s => (
              <Grid item xs={11} key={s.relationshipType}>
                <SynonymList {...s} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default connect(stateToProps)(Word);
