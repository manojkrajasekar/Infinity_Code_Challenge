import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage/LandingPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <LandingPage />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
