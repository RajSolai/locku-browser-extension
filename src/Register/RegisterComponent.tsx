import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useRef } from "react";

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const history = useHistory();
  const feedbackRef = useRef(null);

  const createAccount = async () => {
    if (pwd !== confirmPwd) {
      feedbackRef.current.innerHTML = "Password Mismatch :(";
      return;
    }
    if (email.length !== 0 && pwd.length !== 0 && confirmPwd.length !== 0) {
      feedbackRef.current.innerHTML = "Please enter all the fields !";
      return;
    }
    const userData = {
      email,
      pwd,
    };
    const response = await axios.post(
      "http://localhost:5555/register",
      userData
    );
    if (response.data === "userCreated") {
      history.push("/login");
    }
  };

  return (
    <>
      <div className="login">
        <h2>Register</h2>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="text-box"
          placeholder="Enter Email address"
        />
        <input
          type="password"
          onChange={(e) => setPwd(e.target.value)}
          className="text-box"
          placeholder="Enter a Secret key"
        />
        <input
          type="password"
          onChange={(e) => setConfirmPwd(e.target.value)}
          className="text-box"
          placeholder="Confirm the Secret key"
        />
        <p className="feedback bad-feedback" ref={feedbackRef}></p>
        <button onClick={createAccount} className="btn">
          Register
        </button>
        <Link to="/">Looking for Passwords? Login !</Link>
      </div>
    </>
  );
};

export default RegisterComponent;
