import React, { useContext } from "react";

import { Navigate } from "react-router";

import { LoginContext } from "../providers/loginProvider/LoginContext";

export default function RoutePrivate({ children }) {
  const { info_login } = useContext(LoginContext);
  const { uid } =
    localStorage.getItem("INFO_LOGIN") !== null
      ? JSON.parse(localStorage.getItem("INFO_LOGIN"))
      : "";

  const conditionalSection = info_login.uid ? info_login.uid : uid;
  console.log(info_login);
  return conditionalSection ? children : <Navigate to={"/login"} />;
}
