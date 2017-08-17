import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import Collapse from 'material-ui/transitions/Collapse';
import { withState, withHandlers, compose } from 'recompose';
import Divider from 'material-ui/Divider';
import Card, { CardHeader, CardActions, CardMedia } from 'material-ui/Card';

const withSwitch = compose(
  withState('open', 'flip', false),
  withHandlers({
    toggle: ({ flip }) => () => flip(x => !x),
    forfeit: ({ flip }) => () => flip(true),
  })
);
const mapState = ({ word }) => ({ word });
const Connected = connect(mapState);
const styles = { backgroundColor: 'transparent' };
const dStyle = { backgroundColor: '#f0f' };

const Forfeit = ({ word, open, toggle }) =>
  (<Grid container justify="center" align="center">
    <Grid item xs>
      <Card style={styles}>
        <CardActions>
          <Grid container justify="center" align="center">
            <Grid item xs>
              <Button color="accent" onClick={toggle}>
                {open ? 'hide' : 'forfeit'}
              </Button>
            </Grid>
          </Grid>
        </CardActions>
        <Divider style={dStyle} />
        <CardMedia>
          <Collapse in={open}>
            <Text align="center" type="display3">
              {word}
            </Text>
          </Collapse>
        </CardMedia>
      </Card>
    </Grid>
  </Grid>);

export default Connected(withSwitch(Forfeit));
