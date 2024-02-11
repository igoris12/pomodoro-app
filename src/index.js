import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import {timeStore} from './redux/reduxTimeData/timeStore.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={timeStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
