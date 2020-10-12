import React, { Component } from "react";
import {
  BsFillExclamationDiamondFill,
  BsGiftFill,
  BsInboxesFill,
  BsSpeaker,
} from "react-icons/bs";
import Title from "./Title";
import "./Services.css";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <BsFillExclamationDiamondFill />,
        title: "Lunch Box",
        info: "A eco container in which to carry a packed meal.",
      },
      {
        icon: <BsGiftFill />,
        title: "Eco Bag ",
        info:
          "A reusable shopping bag, sometimes called bag-for-life in the UK, is a type of shopping bag which can be reused many times. It is an alternative to single-use paper or plastic bags.",
      },
      {
        icon: <BsInboxesFill />,
        title: "Eco-friendly tableware",
        info:
          "Wooden cutlery by Talking tables. Eat sustainably in style! Each pack contains 6 sets of planet friendly cutlery.",
      },
      {
        icon: <BsSpeaker />,
        title: "Other Eco products",
        info:
          "a combining form representing ecology in the formation of compounds (ecosystem; ecotype); also with the more general sense “environment,” “nature,” “natural habitat”",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Products" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <br />
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
