import React from "react";

import { Navigate } from "react-router";

import { useSelector } from "react-redux";

export default function RoutePublic({ children }) {
  const { status_login } = useSelector((state) => state.AUTH_LOGIN);

  const { sucess } =
    localStorage.getItem("AUTH_STATUS") !== null
      ? JSON.parse(localStorage.getItem("AUTH_STATUS"))
      : "";

  const conditionalSection = status_login.sucess === true ? status_login.sucess : sucess;
  console.log(status_login);
  return conditionalSection ? <Navigate to={"/"} /> : children;
}
