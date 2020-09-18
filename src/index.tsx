import React from 'react';
import ReactDOM from 'react-dom';
import loadable from '@loadable/component'

import * as serviceWorker from './serviceWorker';

import './styles.css'

const AppLoader = loadable(() => import('./components/App'))

ReactDOM.render(
  <React.StrictMode>
    <AppLoader fallback={<div>Loading...</div>} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
