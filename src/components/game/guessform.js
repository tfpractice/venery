import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/Button';
import { Field, } from 'redux-form';
import { connect, } from 'react-redux';

import { ClearForm, renderText, } from '../../utils';
import { Guesses, } from '../../modules';

const BaseGuess = ({ handleSubmit, dispatch, onSubmit, reset, }) => (
  <form onSubmit={handleSubmit} >
    <Field
      name="guess" component={renderText} type="text"
      onKeyPress={({ key, }) => Promise.resolve(onSubmit(key)).then(reset)}
    />
  </form>
  );

const ReduxGuess = ClearForm(BaseGuess);

const GuessForm = ({ guessLetter, guessForm, formID, dispatch, }) => (
  <ReduxGuess form={'guessChar'} onSubmit={guessLetter} />
  );

export default connect(null, Guesses.actions)(GuessForm);
