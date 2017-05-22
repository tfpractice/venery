import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { Switch, } from 'react-router-dom';

import Nav from './nav';

const styles = { paddingTop: '5rem', };

export default class Main extends Component {
  render() {
    // const { route: { routes, }, } = this.props;

    return (
      <Paper>
        <Grid container justify="center" style={styles} >
          <Nav />
          <Grid item sm={12}>
            <h1> hello </h1>
            <Switch>
              {/* {renderRoutes(routes)} */}
            </Switch>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
