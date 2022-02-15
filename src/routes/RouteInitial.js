import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutePublic from "./RoutePublic";
import { Login } from "../pages/Login";
import RoutePrivate from "./RoutePrivate";
import { RouteSecundary } from "./RouteSecundary";
import { Logout } from "../pages/Logout";

export const RouteInitial = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <RoutePublic>
                <Login />
              </RoutePublic>
            }
          />
          <Route
            path="/Signup"
            element={
              <RoutePublic>
                <Logout />
              </RoutePublic>
            }
          />

          <Route
            path="/*"
            element={
              <RoutePrivate>
                <RouteSecundary />
              </RoutePrivate>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
