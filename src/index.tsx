import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router/router";

import "litesomeui";
import "./assets/css/styles.css";

ReactDOM.render(
  <Router>
    <Routers />
  </Router>,
  document.getElementById("root")
);
