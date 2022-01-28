import React from "react";
import HomeComponent from "./Home/HomeComponent";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./Login/LoginComponent";
import RegisterComponent from "./Register/RegisterComponent";
import PasswordComponent from "./Passwords/PasswordComponent";
import Addapps from "./Home/AddAppsComponent";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginComponent}></Route>
          <Route path="/register" exact component={RegisterComponent}></Route>
          <Route path="/home" exact component={HomeComponent}></Route>
          <Route path="/password" exact component={PasswordComponent}></Route>
          <Route path="/addApp" exact component={Addapps}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
