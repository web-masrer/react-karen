import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="header-nav">
          <div className="container-hed">
            <nav>
              <ul className="header-nav-ul">
                <li>
                  <a href="/main">Главная</a>
                </li>
                <li>
                  <a href="/sales">Изделия на Продажу</a>
                </li>
                <li>
                  <a href="/contacts">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
