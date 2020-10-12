import React, { useContext } from "react";

import { AuthContext } from "../config/fbAuth";
import imgPromo from "../images/promotion.png";
import imgVip from "../images/vip.png";

const ProductList = ({ items, productType }) => {
  const currentUser = useContext(AuthContext);

  const newItems = items.filter((item) => {
    if (productType === "all" && currentUser.currentUser !== null) return item;
    else if (
      productType === "all" &&
      currentUser.currentUser === null &&
      item.pdtype !== "member"
    )
      return item;
    else if (item.pdtype === productType) return item;
  });

  const products = newItems.map((item) => {
    return (
      <div className="product-card" key={item.id}>
        <div className="product-card-title">{item.title}</div>
        <img className="product-card-img" src={item.imgurl} alt={item.imgalt} />
        <div className="product-card-content">{item.content}</div>
        <img
          src={imgPromo}
          className="product-promote-img"
          alt="Promote"
          style={{ display: item.promote ? "inline" : "none" }}
        />
        <img
          src={imgVip}
          className="product-vip-img"
          alt="Vip"
          style={{ display: item.member ? "inline" : "none" }}
        />
        <br />
        <p>$ {item.price}</p>
        <br />
      </div>
    );
  });

  return <div className="product-card-container">{products}</div>;
};

export default ProductList;
