import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { userLogin } from "../redux/actions/userLogin";
import { Player } from "@lottiefiles/react-lottie-player";
import { user } from "../redux/reducers/userReducer";
import { loginUrl } from "../utils/urls";

const LoginComponent: React.FC<RouteComponentProps> = ({
  history,
}: RouteComponentProps) => {
  const dispatch = useDispatch();
  const [password, setPasswd] = useState("");
  const [email, setMail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    const userData = {
      email,
      password,
    };
    console.log(userData);
    const response = await axios.post(loginUrl, userData);
    console.log(response);
    if (response.data["msg"] !== "login-fail") {
      const userObject: user = {
        uid: email,
        password: password,
      };
      dispatch(userLogin(userObject));
      history.push("/home");
    } else {
      setFeedback("Login failed, Check username and password");
    }
  };

  return (
    <>
      <div className="login">
        {isLoading ? (
          <>
            <div className="flex align-center items-center justify-center">
              <div>
                <Player
                  autoplay
                  loop
                  src="https://assets10.lottiefiles.com/packages/lf20_F7WfWB.json"
                ></Player>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <input
              type="text"
              onChange={(e) => setMail(e.target.value)}
              className="text-box"
              placeholder="Enter Username"
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
            <p className="feedback bad-feedback">{feedback}</p>
            <Link to="/register">New here ? Register now !</Link>
          </>
        )}
      </div>
    </>
  );
};

export default LoginComponent;
