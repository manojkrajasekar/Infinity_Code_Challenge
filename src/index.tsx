import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import LandingPage from './components/App/App';
import { store } from './state/store/TableStore';

ReactDOM.render(
  <Provider store={store}> 
    <LandingPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);