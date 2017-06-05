import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { Switch, } from 'react-router-dom';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';

const styles = { paddingTop: '5rem', };

const stateToProps = state => (state);

const About = ({}) => (
  <Grid container justify="center" style={styles} >
    <Grid item xs={11}>
      <Card raised>
        <CardHeader title="Welcome to Venery" />
        <CardContent>
          <Text type="subheading">
               A small Guess-the-word style application based on the
               collective noun forms for animals
             </Text>
        </CardContent>
        <CardActions>
          <Button compact>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
    );

export default (About);
