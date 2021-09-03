import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "@litesome/litesome";
import "./assets/css/styles.css";
import "./assets/css/test.css";

import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
