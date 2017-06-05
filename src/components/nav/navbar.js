import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link, } from 'react-router-dom';
import { connect, } from 'react-redux';
import { Game as GameMod, } from '../../modules';

const Nav = ({ match, ...props, startGame, }) => {
  const a = 0;

  console.log('NAV props', props);

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
              <Text type="headline" secondary onClick={startGame} >
                New game
              </Text>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, GameMod.actions)(Nav);
