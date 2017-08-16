import React from 'react';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

const guessed = lSet => chr => lSet.has(chr.toUpperCase());
const correct = wrd => chr =>
  chr && new Set(wrd.toUpperCase()).has(chr.toUpperCase());

const mapState = ({ guesses: { letters }, word }, { chr }) => ({
  isGuessed: guessed(letters)(chr),
  isCorrect: correct(word)(chr),
  colorBool: guessed(letters)(chr) && correct(word)(chr),
});

const Styled = withStyles(
  theme => ({
    right: { background: theme.palette.primary[500] },
    wrong: { background: theme.palette.accent.A400 },
  }),
  { name: 'Letter' }
);

const Letter = ({ chr, classes, isGuessed, colorBool, isCorrect }) =>
  (<Paper className={colorBool ? classes.right : classes.wrong} elevation={5}>
    <Text color="secondary" align="center" type="display3">
      {isGuessed ? ` ${chr} ` : ` _ `}
    </Text>
  </Paper>);

export default connect(mapState)(Styled(Letter));
