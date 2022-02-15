import React from "react";
import { Outlet } from "react-router";
import { Aside } from "../components/aside/Aside";
import { Navbar } from "../components/navbar/Navbar";
import fireConfig from "../firebase/fire";

export const HomePage = () => {
  console.log(fireConfig.auth());
  return (
    <div style={{ position: "relative" }}>
      <Aside />
      <div style={{ margin: "0 0 0 224px" }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
