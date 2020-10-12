import React, { useState, useContext, useEffect } from "react";

import { AuthContext } from "../config/fbAuth";
import { addAdmin } from "../config/fbLogin";

import UploadProduct from "../components/UploadProduct";

const Admin = () => {
  const [email, setEmail] = useState("");
  const { currentUser, isUserAdmin } = useContext(AuthContext);

  const styleContainer = { textAlign: "center" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    addAdmin(email);
  };

  useEffect(() => {}, [isUserAdmin]);
  console.log("isUserAdmin: " + isUserAdmin);
  console.log("currentuser: " + currentUser);

  const adminForm = () => {
    if (isUserAdmin && currentUser !== null) {
      return (
        <div style={styleContainer}>
          <p> Change user to an Admin by email: </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Make Admin</button>
          </form>
          <br />
          <hr />
          <UploadProduct />
        </div>
      );
    } else {
      return (
        <div style={styleContainer}>
          <h2 style={{ color: "red" }}>Please login as Admin! </h2>
          <br />
        </div>
      );
    }
  };

  return adminForm();
};

export default Admin;
