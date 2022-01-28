import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosApps } from "react-icons/io";
import { loadApps } from "../utils/getApps";
import { RouteComponentProps } from "react-router-dom";

const HomeComponent: React.FC<RouteComponentProps> = ({
  history,
  location,
}: RouteComponentProps) => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    getApps();
  }, []);

  const getApps = async () => {
    const ownerId = location.state["uid"];
    const apps = await loadApps("ownerId");
    setApps(apps);
    console.log(ownerId);
  };

  const navigatePages = (appData) => {
    history.push("/password", { appData, change: "...location.state" });
  };

  const navigateToAddApps = () => {
    // history.push("/addApp", { ...location.state });
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
                <h3>{app.appName}</h3>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default HomeComponent;
