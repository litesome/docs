import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "litesomeui";
import "./assets/css/styles.css";

import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
