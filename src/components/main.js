import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import About from './about';
import Nav from './nav';
import { Game, } from './game';

const styles = { paddingTop: '5rem', };

const stateToProps = state => (state);

class Main extends Component {
  render() {
    // const { route: { routes, }, } = this.props;
    console.log('this.prop', this.props);
    return (
      <Grid container justify="center" style={styles} >
        <Nav />
        <Grid item sm={12}>
          <Route exact path="/" component={About} />
          <Route path="/play" component={Game} />
          {/* <Switch >

              <Route path="/play" exact component={Game} />
              <Route path="/" exact component={About} />
            </Switch> */}
        </Grid>
      </Grid>
    );
  }
}
export default connect(stateToProps)(Main);
