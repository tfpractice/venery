import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { Switch, } from 'react-router-dom';

import Nav from './nav';
import { Game, } from './game';

const styles = { paddingTop: '5rem', };

const stateToProps = state => (state);

class Main extends Component {
  render() {
    // const { route: { routes, }, } = this.props;

    return (
      <Paper>
        <Grid container justify="center" style={styles} >
          <Nav />
          <Grid item sm={12}>
            <Game />
            <Switch />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default connect(stateToProps)(Main);
