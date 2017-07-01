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

const DefinitionList = ({ definitions, }) => (
  <List dense >
    <ListSubheader primary>
      <Text type="headline">
        Definitions
      </Text>
    </ListSubheader>
    { definitions.map((d, i) => (
      <ListItem key={i} divider>
        <ListItemText primary={d.text} secondary={d.source} />
      </ListItem>
    ))}
  </List>
);

// export default connect(mapStateToProps)
export default(DefinitionList);
