import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './app/app';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import ReactGA from 'react-ga';


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

ReactGA.initialize('UA-98419716-1'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
