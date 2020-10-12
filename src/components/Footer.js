import React from "react";
import vicoLogo from "../images/vicoLogo.png";
import { IconContext } from "react-icons";
import {
  AiFillAlipayCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillWechat,
} from "react-icons/ai";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>&copy; Vico Ltd. 2020</h3>
      <Link to="/">
        <img className="footer-img" src={vicoLogo} alt="vico" />
      </Link>
      <div>
        <IconContext.Provider
          value={{ color: "white", size: "2em", className: "footer-symbols" }}
        >
          <AiFillAlipayCircle />
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillWechat />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
