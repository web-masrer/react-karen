import React, { Component } from "react";
import "./Header.css";

import Nav from "../Nav/Nav";
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="top-bar animate-dropdown"></div>
        <hr />
        <div className="main-header">
          <div className="container-hed">
            <h1 className="site-title">Ювелирная Мастерская</h1>
            <h1 className="site-title">У Карена</h1>
          </div>
        </div>

        <Nav />
      </header>
    );
  }
}
