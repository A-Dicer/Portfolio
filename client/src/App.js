import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
