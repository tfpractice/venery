import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import About from './about';
import Nav from './nav';
import { Game } from './game';

const styles = {
    paddingTop: '5rem',
};

const stateToProps = ({ game: { inPlay } }) => ({ inPlay });

class Main extends Component {
    render() {
        return (
            <Grid container justify="center" style={styles}>
                <Grid item xs={12}>
                    <Nav />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <Switch>
                        <Route path="/play" component={Game} />
                        <Route path="/" exact component={About} />
                    </Switch>
                </Grid>
            </Grid>
        );
    }
}
export default connect(stateToProps, Game.actions)(Main);
