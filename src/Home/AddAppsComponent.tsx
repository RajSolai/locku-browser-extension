import React, { useState } from "react";
import { IoIosArrowBack, IoIosApps } from "react-icons/io";
import Generator from "generate-password";
import { BiShowAlt } from "react-icons/bi";
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
  const [feedbackMessage, setFeedback] = useState("");
  const [showPass, setShowPass] = useState(false);

  const appApp = async () => {
    const res = await encryptAddApp(appPassword, appName, email, password);
    if (res) {
      setFeedback("App added Successfully");
    } else {
      setFeedback("App addition Failed");
    }
  };

  const genPass = () => {
    const strongPassword = Generator.generate({
      length: 20,
      numbers: true,
      lowercase: true,
      uppercase: true,
      symbols: true,
      excludeSimilarCharacters: true,
    });
    setAppPwd(strongPassword);
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
        <div className="pass-input">
          <input
            type="text"
            onChange={(e) => setAppName(e.target.value)}
            className="text-box"
            placeholder="Enter the App Name"
          />
          <button className="show-btn">
            <IoIosApps size={20} />
          </button>
        </div>

        <div className="pass-input">
          <input
            type={showPass ? "text" : "password"}
            value={appPassword}
            onChange={(e) => setAppPwd(e.target.value)}
            className="text-box"
            placeholder="Enter the Login password"
          />
          <button onClick={() => setShowPass(!showPass)} className="show-btn">
            <BiShowAlt size={20} />
          </button>
        </div>
        <button className="btn" onClick={genPass}>
          Generate Strong Password
        </button>
        <button onClick={appApp} className="btn">
          Add App
        </button>
        <p>{feedbackMessage}</p>
      </div>
    </>
  );
};

export default Addapps;
