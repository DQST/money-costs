import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Import F7 Bundle
import Framework7 from 'framework7/lite-bundle';

// Import F7-React Plugin
import Framework7React from 'framework7-react';
import Framework7Keypad from 'framework7-plugin-keypad';
import 'framework7/framework7-bundle.min.css';

// Init F7-React Plugin
Framework7.use(Framework7React);
Framework7.use(Framework7Keypad);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
