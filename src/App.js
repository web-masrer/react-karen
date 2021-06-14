import React, { Component } from "react";
import "./App.css";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Sales from "./Sales";
import Contacts from "./Contacts";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>

        <Footer />
      </>
    );
  }
}
