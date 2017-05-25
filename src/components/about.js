import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { Switch, } from 'react-router-dom';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { route, } from 'react-router-dom';

// port { Game, } from './game';

const styles = { paddingTop: '5rem', };

const stateToProps = state => (state);

const About = ({}) =>

    // const { route: { routes, }, } = this.props;

   (
     <Grid container justify="center" style={styles} >
       <Grid item sm={6}>
         <Card raised>
           <CardHeader title="Welcome to Venery">
             {/* <Text type="title">

             </Text> */}
           </CardHeader>
           <CardContent>

             <Text type="subheading">
               A small Guess-the-word style application based on the
               collective noun forms for animals
             </Text>
             <Text type="subheading">
               Welcome to Venery, a small Guess-the-word style application based on the group namkes for Animals
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
