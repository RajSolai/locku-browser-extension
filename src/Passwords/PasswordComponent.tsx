import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { user } from "../redux/reducers/userReducer";
import { decryptPassword } from "../utils/decryption";

const PasswordComponent: React.FC<RouteComponentProps> = ({
  history,
  location,
}: RouteComponentProps) => {
  const [appName, setAppName] = useState("app name");
  const [passwd, setPasswd] = useState("******************");
  const password = useSelector((state: user) => state.password);
  const buttonRef = useRef(null);

  useEffect(() => {
    setAppName(location.state["appData"]["appname"]);
  }, [location]);

  const getPassword = () => {
    // decryptPassword(location.state.appData.encryptedPassword, userPwd);
  };

  const showAndHidePassword = () => {
    if (passwd === "******************") {
      const pwd = decryptPassword(
        location.state["appData"]["password"],
        password
      );
      setPasswd(pwd);
      buttonRef.current.innerHTML = "Hide Password";
    } else {
      setPasswd("******************");
      buttonRef.current.innerHTML = "View Password";
    }
  };

  const navigateToHome = () => {
    history.push("/home");
  };

  return (
    <>
      <div className="password">
        <div className="header header-with-back">
          <button className="btn icon-btn" onClick={navigateToHome}>
            <IoIosArrowBack size={35} />
          </button>
          <h3>{appName}</h3>
        </div>
        <h2>{passwd}</h2>
        <button className="btn" onClick={getPassword}>
          Copy Password
        </button>
        <button ref={buttonRef} className="btn" onClick={showAndHidePassword}>
          View Password
        </button>
      </div>
    </>
  );
};

export default PasswordComponent;
