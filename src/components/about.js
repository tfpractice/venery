import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader, } from 'material-ui/Card';

const styles = { paddingTop: '5rem', };

const About = () =>
  (<Grid container justify="center" align="center" style={styles}>
    <Grid item xs={11}>
      <Card raised>
        <CardHeader title="Welcome to Venery" />
        <CardContent>
          <Text type="subheading">
            A small Guess-the-word style application based on the collective
            noun forms for animals
          </Text>
        </CardContent>
      </Card>
    </Grid>
  </Grid>);

export default About;
