import React, { Component } from "react";
import { StoreContext } from "../context";

export default class Features extends Component {
  static contextType = StoreContext;

  render() {
    let { featuredRooms: test } = this.context;
    console.log(test);

    test = test.map((feature) => {
      return <h1 key={feature.id}> {feature.name}</h1>;
    });

    return (
      <div>
        <h1>{test}</h1>
      </div>
    );
  }
}
