import React from 'react';
import { connect, } from 'react-redux';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';

const mapStateToProps = ({ guesses: { letters, }, }, { chr, }) =>
({ isGuessed: (letters).has(chr.toUpperCase()), });

const style = {
  // height: 100,
  // width: '56px',
  // margin: 20,
  // display: 'inline-block',
  background: 'rgba(255,0,255,.2)',
};

const Letter = ({ chr, isGuessed, }) => (
  <Paper style={style} elevation={5}>
    <Text secondary align="center" type="display3">
      {isGuessed ? ` ${chr} ` : '_' }
    </Text>
  </Paper>);

export default connect(mapStateToProps)(Letter);
