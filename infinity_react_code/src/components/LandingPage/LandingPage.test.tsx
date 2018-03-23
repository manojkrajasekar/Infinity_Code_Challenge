import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LandingPage from './LandingPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
});
