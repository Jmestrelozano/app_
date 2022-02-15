import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";

import { HomePage } from "../pages/HomePage";
import { LoginContext } from "../providers/loginProvider/LoginContext";

export default function RoutePublic({ children }) {
  console.log(localStorage.getItem("INFO_LOGIN"), "hooo");
  const { info_login } = useContext(LoginContext);
  const { uid } =
    localStorage.getItem("INFO_LOGIN") !== null
      ? JSON.parse(localStorage.getItem("INFO_LOGIN"))
      : "";

  console.log(localStorage.getItem("INFO_LOGIN"), "hooo");
  const conditionalSection = info_login.uid ? info_login.uid : uid;
  console.log(info_login);
  return conditionalSection ? <Navigate to={"/"} /> : children;
}
