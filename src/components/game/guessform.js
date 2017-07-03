import React from 'react';
import { Field, } from 'redux-form';
import { connect, } from 'react-redux';

import { ClearForm, renderText, } from '../../utils';
import { Guesses, } from '../../modules';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphaSet = new Set(alphabet);

const BaseGuess = ({ handleSubmit, dispatch, onSubmit, reset, }) => (
  <form onSubmit={handleSubmit} >
    <Field
      name="guess"
      component={renderText}
      onKeyPress={({ key, }) =>
        alphaSet.has(key) && Promise.resolve(onSubmit(key)).then(reset)}
    />
  </form>
  );

const ReduxGuess = ClearForm(BaseGuess);

const GuessForm = ({ guessLetter, guessForm, formID, }) => (
  <ReduxGuess form={'guessChar'} onSubmit={guessLetter} />
  );

export default connect(null, Guesses.actions)(GuessForm);
