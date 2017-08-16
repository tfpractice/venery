import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { withProps } from 'recompose';

import { Guesses } from '../../modules';
import { ClearForm, renderText } from '../../utils';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphaSet = new Set(alphabet);

const pMap = ({ reset, onSubmit }) => ({
  press: ({ key }) =>
    alphaSet.has(key) && Promise.resolve(onSubmit(key)).then(reset),
});

const WithPress = withProps(pMap);

const Styled = withStyles(
  theme => ({ field: { backgroundColor: 'rgba(38,166,154,0.5)' }}),
  { name: 'GuessForm' }
);

const BaseGuess = ({ handleSubmit, press, classes }) =>
  (<form onSubmit={handleSubmit} className={classes.field}>
    <Field name="guess" component={renderText} onKeyPress={press} />
  </form>);
const ReduxGuess = ClearForm(WithPress(Styled(BaseGuess)));

const GuessForm = ({ guessLetter, formID }) =>
  <ReduxGuess form={'guessChar'} onSubmit={guessLetter} />;

export default connect(null, Guesses.actions)(GuessForm);
