import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import { App } from "./App";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { AboutUs } from "./aboutUs";

/* ReactDOM.render(<App />, document.getElementById("root")); */

ReactDOM.render(
    <React.StrictMode>
     <BrowserRouter basename={window.location.pathname || ''}>
      <Main />
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );