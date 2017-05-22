import React from 'react';
import { connect, } from 'react-redux';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
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
  <Paper style={style} elevation={5}>
    <Text type="display3">
      {isGuessed ? ` ${chr} ` : ' ___ ' }
    </Text>
  </Paper>);

export default connect(mapStateToProps)(Letter);
