import React from "react";

import Product from "./Product";

const Promote = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", paddingTop: "40px", color: "#FC7C7C" }}>
        Hot Promotion!!
      </h2>
      <br />
      <Product productType="promote" />
    </div>
  );
};

export default Promote;
