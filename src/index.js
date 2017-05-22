import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Base as App, } from './components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
