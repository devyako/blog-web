import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/blogs" exact render={() => <h1>Blogs</h1>} />
      <Route path="/articles" exact render={() => <h1>Articles</h1>} />
      <Route path="/motivations" exact render={() => <h1>Motivations</h1>} />
      <Route path="/about" exact render={() => <h1>About</h1>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
