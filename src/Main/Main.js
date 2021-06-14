import React, { Component } from "react";
import "./Main.css";
import main1 from "../img/main1.jpg";
import main2 from "../img/main2.jpg";
export default class Main extends Component {
  render() {
    return (
      <main className="container">
        <div className="main-title">
          <h1>Произвожу изготовление и ремонт Ювелирных Изделий</h1>
        </div>
        <div className="main-img">
          <img src={main1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nisi
            ad quae consectetur sequi iste libero laudantium sunt obcaecati
            temporibus nulla dicta quod adipisci asperiores ullam cumque cum
            dignissimos recusandae ratione odit quos accusamus voluptatibus
            quasi unde! Sed enim odit fugit. Rerum nisi eligendi exercitationem
            ducimus cum ad ipsum magnam?
          </p>
        </div>
        <div className="main-img">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            quisquam atque quos suscipit veritatis est officiis animi. Sequi
            possimus quos incidunt cum fuga, eius, impedit suscipit vitae eos
            quas rerum illo ab? Voluptatibus, ratione quas, et veritatis hic
            earum nostrum excepturi enim velit aliquid iste omnis facilis. Ea,
            animi fugit!
          </p>
          <img src={main2} alt="" />
        </div>
      </main>
    );
  }
}
