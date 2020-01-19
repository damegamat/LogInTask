import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import App from "./components/app/App";
import SignIn from "./components/signin/SignIn";
import UserDetails from "./components/userDetails/UserDetails";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/user/:id" component={UserDetails} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
