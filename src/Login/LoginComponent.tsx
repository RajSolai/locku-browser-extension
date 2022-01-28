import axios from "axios";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { userLogin } from "../redux/actions/userLogin";
import { user } from "../redux/reducers/userReducer";

const LoginComponent: React.FC<RouteComponentProps> = ({ history }:RouteComponentProps) => {
  const dispatch = useDispatch();
  const [password, setPasswd] = useState("");
  const [email, setMail] = useState("");
  const feedbackRef = useRef(null);

  const login = async () => {
    const userData = {
      email,
      password,
    };
    console.log(userData);
    const response = await axios.post("http://localhost:5555/login", userData);
    if (response.data !== "userLoginFailed") {
      const userObject: user = {
        uid: response["data"]["uid"],
        password: response["data"]["password"],
      };
      dispatch(userLogin(userObject));
      history.push("/home");
    } else {
      feedbackRef.current.innerHTML = "Login failed, Check email and password";
    }
  };

  return (
    <>
      <div className="login">
        <h2>Login</h2>
        <input
          type="text"
          onChange={(e) => setMail(e.target.value)}
          className="text-box"
          placeholder="Enter Email address"
        />
        <input
          type="password"
          onChange={(e) => setPasswd(e.target.value)}
          className="text-box"
          placeholder="Enter your Secret key"
        />
        <button onClick={login} className="btn">
          Login
        </button>
        <p className="feedback bad-feedback" ref={feedbackRef}></p>
        <Link to="/register">New here ? Register now !</Link>
      </div>
    </>
  );
};

export default LoginComponent;
