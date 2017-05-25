import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link, } from 'react-router-dom';

const Nav = ({ match, ...props }) => {
  console.log('match', match);
  console.log('props', props);
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" direction="row" align="center">
          <Grid item>
            <Grid container direction="row" align="center">
              <Link to="/" >
                <Text type="headline" secondary >
                  Venery
                </Text>
              </Link>

            </Grid>
          </Grid>
          <Grid item>
            <Link to="/play" >
              <Text type="headline" secondary >
              New game
            </Text>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
