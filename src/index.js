import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { BrowserRouter, } from 'react-router-dom';
import { MuiThemeProvider, } from 'material-ui/styles';

import { styleManager, theme, } from './utils';

import { App, } from './components';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MuiThemeProvider theme={theme} styleManager={styleManager}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
, document.getElementById('root'));

registerServiceWorker();
