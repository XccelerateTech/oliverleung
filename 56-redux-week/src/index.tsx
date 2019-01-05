import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './exercise-2/app';
import App from './d57/exercise-1/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
