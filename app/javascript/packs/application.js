import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from '../src/Redux/store/configureStore';
import App from '../src/App';

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);
