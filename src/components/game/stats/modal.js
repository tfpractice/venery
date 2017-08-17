import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Close from 'material-ui-icons/Close';
import { connect } from 'react-redux';
import List, { ListItem, ListSubheader, ListItemText } from 'material-ui/List';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import { compose, withHandlers, withState } from 'recompose';
import { withStyles } from 'material-ui/styles';

const mapState = ({ animals }) => {
  console.log('animals', animals);
  return { animals };
};
const Connected = connect(mapState);

//
const Styled = withStyles(theme => ({ paper: { backgroundColor: 'rgba(238,238,238,0.85)' }}));

const withModal = compose(
  withState('open', 'turn', false),
  withHandlers({ toggle: ({ turn }) => () => turn(x => !x) })
);

const Modal = (props) => {
  const { classes, open, toggle } = props;
  let view;

  return (
    <Grid container align="center">
      <Grid item>
        <Button onClick={toggle}>Stats</Button>

        <Dialog
          fullScreen
          classes={classes}
          open={open}
          onRequestClose={toggle}
          transition={<Slide direction="up" />}
        >
          <DialogContent>
            <AppBar>
              <ToolBar>
                <IconButton color="accent" onClick={toggle}>
                  <Close />
                </IconButton>
              </ToolBar>
            </AppBar>
            <Grid
              container
              align="center"
              justify="center"
              style={{ marginTop: '3rem' }}
            >
              <Grid item xs={12} md>
                <List>
                  <ListSubheader>Correct</ListSubheader>
                </List>
              </Grid>
              <Grid item xs={12} md>
                <List>
                  <ListSubheader>Incorrect</ListSubheader>
                </List>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Connected(withModal(Styled(Modal)));
