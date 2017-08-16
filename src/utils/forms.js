import React from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm, reset } from 'redux-form';

export const onSubmitSuccess = (res, dispatch, { reset }) => reset();

export const ClearForm = form =>
  reduxForm({
    onSubmitSuccess,
    enableReinitialize: true,
  })(form);
export const ClearHOC = reduxForm({
  onSubmitSuccess,
  enableReinitialize: true,
});

export const renderText = ({ input, meta: { error: e }, ...rest }) =>
  <TextField fullWidth inputProps={input} error={e} {...rest} />;

export default formID => (action, dispatch) => dispatch(reset(formID));
