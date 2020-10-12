import React from "react";
import Product from "../components/Product";

const Products = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", paddingTop: "40px", color: "green" }}>
        Green Products
      </h2>
      <br />
      <Product productType="all" />
    </div>
  );
};

export default Products;
