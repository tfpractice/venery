import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Game as GameMod } from '../../modules';

const Nav = ({ match, startGame }) =>
    <AppBar>
        <Toolbar>
            <Grid container justify="space-between" align="center">
                <Grid item>
                    <Link to="/">
                        <Text type="headline" color="secondary">
                            Venery
                        </Text>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/play" onClick={startGame}>
                        <Text type="headline" color="secondary">
                            New game
                        </Text>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>;

export default connect(null, GameMod.actions)(Nav);
