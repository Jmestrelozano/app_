import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { refreshToken } from "../apis/refreshToken";
import { Configuration } from "../components/configuration/Configuration";
import { Finance } from "../components/finance/Finance";
import { Inventory } from "../components/inventory/Inventory";
import { Maintenance } from "../components/maintenance/Maintenance";
import { Movimients } from "../components/movimients/Movimients";
import { Query } from "../components/query/Query";
import { Reports } from "../components/reports/Reports";
import fireConfig from "../firebase/fire";
import { HomePage } from "../pages/HomePage";

export const RouteSecundary = () => {
  const { status_login } = useSelector((state) => state.AUTH_LOGIN);
  let inactivityTime = function () {
    if (status_login.sucess) {
      let time;
      window.onload = resetTimer;
      // DOM Events
      document.onmousemove = resetTimer;
      document.onkeypress = resetTimer;

      function logout() {
        alert("You are now logged out.");
        // refreshToken(info_login.refreshToken);
        // fireConfig.auth().signOut();
        // setInfo_login({ token: "", uid: "" ,refreshToken:''});
      }

      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 900000);
        // 1000 milliseconds = 1 second
      }
    }
  };
  useEffect(() => {
    inactivityTime();
  }, []);

  console.log(fireConfig.auth());

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/MantradPlusII" element={<Configuration />} />
          <Route path="/Marcas" element={<Maintenance />} />
          <Route path="/Compras" element={<Movimients />} />
          <Route path="/inventario" element={<Inventory />} />
          <Route path="/finanzas" element={<Finance />} />
          <Route path="/subCONSU" element={<Query />} />
          <Route path="/subREPOR" element={<Reports />} />

          <Route path="/*" element={<div>NOT FOUND</div>} />
        </Route>
      </Routes>
    </>
  );
};
