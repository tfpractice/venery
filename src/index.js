import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { BrowserRouter, } from 'react-router-dom';
import { MuiThemeProvider, } from 'material-ui/styles';

import { styleManager, theme, } from './utils';
import getStore from './store';
import { App, } from './components';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={getStore()}>
    <MuiThemeProvider theme={theme} styleManager={styleManager}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
