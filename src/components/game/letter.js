import React from 'react';
import { connect, } from 'react-redux';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles, } from 'material-ui/styles';

const mapStateToProps = ({ guesses: { letters, }, word, }, { chr, }) =>
({
 isGuessed: (letters).has(chr.toUpperCase()),
 isCorrect: chr && (new Set(word.toUpperCase()).has(chr.toUpperCase())),
});

const styles = createStyleSheet('Letter', theme => ({
    right: { background: '#009688', },
    wrong: { background: '#F50057', },
}));

const Letter = ({ chr, classes, isGuessed, isCorrect, }) => (
  <Paper className={(isGuessed && isCorrect) ? classes.right : classes.wrong} elevation={5}>
    <Text secondary align="center" type="display3">
      {isGuessed ? ` ${chr} ` : '_' }
    </Text>
  </Paper>);

export default connect(mapStateToProps)(withStyles(styles)(Letter));
