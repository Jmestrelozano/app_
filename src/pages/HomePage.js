import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { Aside } from "../components/aside/Aside";
import { Navbar } from "../components/navbar/Navbar";
import fireConfig from "../firebase/fire";
import { types_Login } from "../reducers/loginReducer/typesLogin";

export const HomePage = () => {
  console.log(fireConfig.auth());
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("kkk", JSON.parse(localStorage.getItem("INFO_LOGIN")));
    if (
      JSON.parse(localStorage.getItem("INFO_LOGIN")) !== null ||
      JSON.parse(localStorage.getItem("INFO_LOGIN")) !== undefined
    ) {
      const { estado, foto, usuario, perfDesc, infoGlobla, numPerfil } = JSON.parse(
        localStorage.getItem("INFO_LOGIN")
      );
      dispatch({
        type: types_Login.INFO_LOGIN,
        payload: {
          perfDesc: perfDesc,
          usuario: usuario,
          foto: foto,
          numPerfil: numPerfil,
          estado: estado,
          infoGlobla: infoGlobla,
        },
      });
    }
  }, []);
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
