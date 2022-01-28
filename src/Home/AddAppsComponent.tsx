import React, { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { user } from "../redux/reducers/userReducer";
import { encryptAddApp } from "../utils/decryption";

const Addapps: React.FC<RouteComponentProps> = ({
  history,
  location,
}: RouteComponentProps) => {
  const email = useSelector((state: user) => state.uid);
  const password = useSelector((state: user) => state.password);
  const [appName, setAppName] = useState("");
  const [appPassword, setAppPwd] = useState("");
  const feedBackRef = useRef(null);

  const appApp = async () => {
    encryptAddApp(appPassword, appName, email, password);
    // if (res.data === "appAdded") {
    //   feedBackRef.current.innerHTML = "App added Successfully";
    // } else {
    //   feedBackRef.current.innerHTML = "App addition Failed";
    // }
  };

  const navigateToHome = () => {
    history.push("/home", location.state);
  };

  return (
    <>
      <div className="login">
        <div className="header header-with-back">
          <button className="btn icon-btn" onClick={navigateToHome}>
            <IoIosArrowBack size={35} />
          </button>
          <h3>Add Apps</h3>
        </div>
        <input
          type="text"
          onChange={(e) => setAppName(e.target.value)}
          className="text-box"
          placeholder="Enter the App Name"
        />
        <input
          type="password"
          onChange={(e) => setAppPwd(e.target.value)}
          className="text-box"
          placeholder="Enter the Login password"
        />
        <button onClick={appApp} className="btn">
          Add App
        </button>
        <p ref={feedBackRef}></p>
      </div>
    </>
  );
};

export default Addapps;
