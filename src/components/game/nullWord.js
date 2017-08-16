import React from 'react';
import Button from 'material-ui/Button';

import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Game } from '../../modules';

const NoWord = ({ startGame }) =>
  (<Card>
    <CardHeader title="there is no current game in play, start a new game to begin" />
    <CardActions>
      <Button onClick={startGame}>Start Game</Button>
    </CardActions>
  </Card>);

export default connect(null, Game.actions)(NoWord);
