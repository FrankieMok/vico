import React, { useContext } from "react";

import Product from "./Product";
import { AuthContext } from "../config/fbAuth";

const Member = () => {
  const currentUser = useContext(AuthContext);

  return (
    <div
      style={{
        display: currentUser.currentUser === null ? "none" : "inline",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          paddingTop: "40px",
          color: "green",
        }}
      >
        Members sale!!
      </h2>
      <br />
      <Product productType="member" />
    </div>
  );
};

export default Member;
