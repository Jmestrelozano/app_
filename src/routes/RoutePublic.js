import React from "react";

import { Navigate } from "react-router";

import { useSelector } from "react-redux";

export default function RoutePublic({ children }) {
  console.log(localStorage.getItem("INFO_LOGIN"), "hooo");
  const { info_login } = useSelector((state) => state.AUTH_LOGIN);

  const { uid } =
    localStorage.getItem("INFO_LOGIN") !== null
      ? JSON.parse(localStorage.getItem("INFO_LOGIN"))
      : "";

  console.log(localStorage.getItem("INFO_LOGIN"), "hooo");
  const conditionalSection = info_login.uid ? info_login.uid : uid;
  console.log(info_login);
  return conditionalSection ? <Navigate to={"/"} /> : children;
}
