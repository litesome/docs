import Home from "../components/home/index.js";
import Docs from "../components/docs";
import LayoutGrid from "../components/docs/layouts/grids";
import ComponentsButtons from "../components/docs/components/buttons";
import Themes from "../components/themes/index.js";
import Test from "../components/test";
import NotFound from "../components/NotFound";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/docs/layouts/grids" component={LayoutGrid} />
          <Route exact path="/docs/components/buttons" component={ComponentsButtons} />
          <Route path="/themes" component={Themes} />
          <Route exact path="/docs/test" component={Test} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
