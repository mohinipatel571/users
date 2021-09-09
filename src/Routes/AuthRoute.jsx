import React from "react";
import { Route, Switch } from "react-router-dom";
import MyInfo from "../components/MyInfo";
import User from "../components/User";
import Welcome from "../components/Welcome";
const AuthRoute = () => {
  return (
    <>
      <Switch>
        <Route path="/home" component={Welcome} />{" "}
        <Route path="/user" component={User} />{" "}
        <Route path="/myinfo" component={MyInfo} />{" "}
        <Route path="/" component={Welcome} />{" "}
      </Switch>
    </>
  );
};
export default AuthRoute;
