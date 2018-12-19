import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './approvalCard/App';
// import App from './ExState/app';
// import App from './ExState2/app2';
// import Counter from './Counter/Counter';
import App from './Questionnaire/Questionnaire';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
