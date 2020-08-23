import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Cat from './Cat';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Cat />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
