import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/:name" component={Blog} />
    </Switch>
  </Fragment>
);

export default App;
