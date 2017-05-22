import React from 'react';
import { connect, } from 'react-redux';
import Paper from 'material-ui/Paper';

const mapStateToProps = ({ guesses: { letters, }, }, { chr, }) =>
({ isGuessed: (letters).has(chr.toUpperCase()), });

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  background: '#666',
};

const Letter = ({ chr, isGuessed, }) => (
  <Paper style={style} elevation={5}><b>
    {isGuessed ? ` ${chr} ` : ' ___ ' }
  </b>
  </Paper>);

export default connect(mapStateToProps)(Letter);
