import React from "react";
import { NotificationContainer } from "react-notifications";
import { FormLogout } from "../components/auth/FormLogout";
import "../styles/login/formLoginStyle.css";

export const Logout = () => {
  return (
    <div style={{ background: "#f8f9fa" }} className="cr-content container-fluid">
      <div
        className="row"
        style={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-6 col-lg-4">
          <div className="card card-body">
            <FormLogout />
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};
