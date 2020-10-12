import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaAlignRight } from "react-icons/fa";
import SignInModal from "./SignInModal";

import { logOut } from "../config/fbLogin";
import { AuthContext } from "../config/fbAuth";

class NavBar extends Component {
  state = { isClick: false, isSignInModalOpen: false, isLogin: false };

  static contextType = AuthContext;

  render() {
    const currentUser = this.context.currentUser;

    const handleToggle = () => {
      this.setState({ isClick: !this.state.isClick });
    };

    const isSignInModalIsOpen = () => {
      this.setState({
        isSignInModalOpen: !this.state.isSignInModalOpen,
        isClick: !this.state.isClick,
      });
    };

    const Signout = () => {
      handleToggle();
      logOut();
    };

    const navBarItems = [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/about",
      },
      {
        title: "How to Order",
        url: "/how-to-order",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ];

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-header">
            <Link to="/">
              <img
                src={require("../images/vicoLogo.png")}
                alt="a"
                className="navbarImg"
              ></img>
            </Link>
            <button
              type="button"
              className="navbar-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="navbar-icon" />{" "}
            </button>
          </div>
          <ul
            className={
              this.state.isClick ? "navbar-links show-navbar" : "navbar-links"
            }
          >
            {navBarItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} onClick={handleToggle}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li className="navbar-product">
              <Link to="/products" onClick={handleToggle}>
                Products
              </Link>
            </li>

            <li
              className="navbar-loginout"
              style={{
                display: currentUser === null ? "inline" : "none",
              }}
            >
              <Link to="#" onClick={isSignInModalIsOpen}>
                SignIn
              </Link>
              <SignInModal
                isModalOpen={this.state.isSignInModalOpen ? 1 : 0}
                isSignInModal={isSignInModalIsOpen}
              />
            </li>

            <li
              className="navbar-loginout"
              style={{
                display: currentUser === null ? "none" : "inline",
              }}
            >
              <Link to="#" onClick={Signout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
