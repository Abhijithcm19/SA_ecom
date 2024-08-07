import React, { useState } from "react";
import "../Styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [signUp, setSignUp] = useState("Sign Up");
  return (
    <>
      <div className="container login-container  d-flex flex-column pt-3 mb-5 mt-5 shadow  ">
        <div className="header d-flex flex-column align-items-center mt-2 gap-1 ">
          <div className="login-text fs-2 fw-bold">{signUp}</div>
          <div className="head-underline"></div>
        </div>
        <div className="inputs d-flex flex-column gap-4 mt-5">
          {signUp === "Login" ? (
            <div></div>
          ) : (
            <div className="login-input ">
              <span className="opacity-75">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </span>
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="login-input">
            <span className="opacity-75">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </span>
            <input type="email" placeholder="Email id" />
          </div>
          <div className="login-input">
            <span className="opacity-75">
              <FontAwesomeIcon icon={faLock} size="lg" />
            </span>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
        <div className="submit-container">
          <div
            className={signUp === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setSignUp("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={signUp === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setSignUp("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
