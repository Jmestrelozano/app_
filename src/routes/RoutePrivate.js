import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router";

export default function RoutePrivate({ children }) {
  const { info_login } = useSelector((state) => state.AUTH_LOGIN);

  const { uid } =
    localStorage.getItem("INFO_LOGIN") !== null
      ? JSON.parse(localStorage.getItem("INFO_LOGIN"))
      : "";

  const conditionalSection = info_login.uid ? info_login.uid : uid;
  console.log(info_login);
  return conditionalSection ? children : <Navigate to={"/login"} />;
}
