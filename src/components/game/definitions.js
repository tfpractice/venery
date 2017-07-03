import React from 'react';
import Text from 'material-ui/Typography';
import List, { ListItem, ListItemText, ListSubheader, } from 'material-ui/List';

const DefinitionList = ({ definitions, }) => (
  <List dense >
    <ListSubheader primary>
      <Text color="accent" align="center" type="headline">
        Definitions
      </Text>
    </ListSubheader>
    {definitions.map((d, i) => (
      <ListItem key={i} divider>
        <ListItemText primary={d.text} secondary={d.source} />
      </ListItem>
    ))}
  </List>
);

export default(DefinitionList);
