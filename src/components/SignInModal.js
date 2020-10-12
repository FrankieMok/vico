import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";

import { register, Login } from "../config/fbLogin";
import { AuthContext } from "../config/fbAuth";

Modal.setAppElement("#root");
const SignInModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("");
  const [isPwDisplay, setPwDisplay] = useState(false);

  const currentUser = useContext(AuthContext);

  const state = {
    button: 1,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.button === 1) {
      console.log(" Clicked Login");
      Login(email, password);
    }

    if (state.button === 2) {
      console.log("clicked Register");
      register(email, password, display);
    }
  };

  useEffect(() => {
    if (currentUser.currentUser !== null && props.isModalOpen === 1) {
      setEmail("");
      setPassword("");
      setDisplay("");
      props.SignInModal();
    }
  }, [currentUser, props.SignInModal, props.isModalOpen]);

  const showPW = () => {
    setPwDisplay(!isPwDisplay);
  };

  // const validate = (values) => {
  //   let error = {};
  //   if (!values.email) {
  //     error.email = " Required ";
  //     console.log("error email: " + error.email);
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     error.email = "Invalid email address";
  //     console.log("error email: " + error.email);
  //   }

  //   if (!values.password) {
  //     error.password = " Required ";
  //   } else if (!/^[A-Z0-9._%+-]{8,}/i.test(values.password)) {
  //     error.password = " Please enter more than 10 words. ";
  //   }
  // };

  return (
    <div>
      <Modal
        isOpen={Boolean(Number(props.isModalOpen))}
        style={{
          overlay: {
            backgroundColor: "rgba(220, 220, 220, 0.75)",
          },
          content: {
            margin: "0 auto",
            width: "340px",
            background: "#EEFFEE",
            borderRadius: "20px",
          },
        }}
      >
        <h4> Login / SignIn form </h4>
        <hr />
        <br />
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-fill">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p>Please enter a valid email address.</p>
          </div>

          <div className="contact-fill">
            <label htmlFor="password">Password: </label>
            <input
              type={isPwDisplay ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              pattern="[A-Za-z0-9]{6,}"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>Password minimum with 6 digits.</p>

            <input
              type="checkbox"
              id="checkPW"
              onClick={showPW}
              name="checkPW"
            />
            <label htmlFor="checkPW"> Show Password </label>
          </div>
          <br />
          <div className="contact-fill">
            <label htmlFor="display">Display Name: </label>
            <input
              type="text"
              id="display"
              name="display"
              value={display}
              onChange={(e) => {
                setDisplay(e.target.value);
              }}
            />
          </div>

          <div className="contact-fill"></div>
          <button
            className="contact-btn"
            type="submit"
            name="Login"
            onClick={() => (state.button = 1)}
          >
            Login
          </button>
          <button
            className="contact-btn"
            type="submit"
            name="Signin"
            onClick={() => (state.button = 2)}
          >
            Signin
          </button>
        </form>
        <br />
        <hr />
        <button className="contact-btn" onClick={props.SignInModal}>
          {" "}
          Close Form
        </button>
      </Modal>
    </div>
  );
};

export default SignInModal;
