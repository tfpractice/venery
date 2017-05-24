import React from 'react';
import { connect, } from 'react-redux';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';

//
// const mapStateToProps = ({ guesses: { letters, }, }, { chr, }) =>
// ({ isGuessed: (letters).has(chr.toUpperCase()), });
//
// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   display: 'inline-block',
//   background: '#666',
// };

const SynonymList = ({ relationshipType, words, }) => (
  <List >
    <ListSubheader >
      <Text type="button">
        {relationshipType}
      </Text>
    </ListSubheader>
    <ListItem divider>
      {words.map((w, j) => (
        <Chip label={w} key={w} />
      ))}
    </ListItem>
  </List>)

;

// export default connect(mapStateToProps)
export default(SynonymList);
