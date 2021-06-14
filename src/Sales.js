import React, { Component } from "react";

import item1 from "./img/1.jpg";
import item2 from "./img/2.jpg";
import item3 from "./img/3.jpg";
import item4 from "./img/4.jpg";
import item5 from "./img/5.jpg";
import item6 from "./img/6.jpg";
import item7 from "./img/7.jpg";
import item8 from "./img/8.jpg";

import "./Sales.css";

export default class Sales extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="sales-title">Лоты на Продажу</h1>
        <div className="sales-items-box">
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item1} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item2} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item3} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item4} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item5} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item6} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item7} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
          <div className="sales-item">
            <div className="item-con-img">
              <img src={item8} alt="" className="item-img" />
            </div>
            <div className="item-write">
              <p>Лот №-1</p>
              <p>Проба-583</p>
              <p>Вес-5гр</p>
              <p>Пр-во:Россия</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
