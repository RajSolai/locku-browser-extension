import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosApps } from "react-icons/io";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../redux/reducers/userReducer";
import { loadApps } from "../utils/getApps";
import { app } from "../utils/types";

const HomeComponent: React.FC<RouteComponentProps> = ({
  history,
}: RouteComponentProps) => {
  const [apps, setApps] = useState([]);
  const email = useSelector((state: user) => state.uid);
  const password = useSelector((state: user) => state.password);

  useEffect(() => {
    getApps();
  }, []);

  const getApps = async () => {
    console.log(password, email);
    const apps = await loadApps(email);
    setApps(apps);
    console.log(apps);
  };

  const navigatePages = (appData: app) => {
    history.push("/password", { appData, change: "...location.state" });
  };

  const navigateToAddApps = () => {
    history.push("/addApp");
  };

  return (
    <>
      <div className="apps">
        <div className="header">
          <h3>Apps</h3>
          <button className="btn icon-btn" onClick={navigateToAddApps}>
            <IoIosAdd size={40} />
          </button>
        </div>
        {apps.length === 0 ? (
          <h2>No apps found add New app</h2>
        ) : (
          apps.map((app) => (
            <>
              <div className="app-card" onClick={() => navigatePages(app)}>
                <IoIosApps size={40} />
                <h3>{app["appname"]}</h3>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default HomeComponent;
