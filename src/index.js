import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "unstated";

import ProgramContainer from "./states/ProgramState";
import WorkshopContainer from "./states/WorkshopState";
import AppState from "./states/AppState";
import GenericEvalState from "./states/WorkshopState";

ReactDOM.render(
  <Provider
    inject={[ProgramContainer, WorkshopContainer, AppState, GenericEvalState]}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
