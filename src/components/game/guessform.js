import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { withProps } from 'recompose';

import { ClearForm, renderText } from '../../utils';
import { Guesses } from '../../modules';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphaSet = new Set(alphabet);
const style = { backgroundColor: 'rgba(255,0,255,0.5)' };

const pMap = ({ reset, onSubmit }) => ({
  press: ({ key }) =>
    alphaSet.has(key) && Promise.resolve(onSubmit(key)).then(reset),
});

const WithPress = withProps(pMap);

const BaseGuess = ({ handleSubmit, press }) =>
  (<form onSubmit={handleSubmit} style={style}>
    <Field name="guess" component={renderText} onKeyPress={press} />
  </form>);
const ReduxGuess = ClearForm(WithPress(BaseGuess));

const GuessForm = ({ guessLetter, formID }) =>
  <ReduxGuess form={'guessChar'} onSubmit={guessLetter} />;

export default connect(null, Guesses.actions)(GuessForm);
