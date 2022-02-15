import React from "react";
import { NotificationContainer } from "react-notifications";
import { FormLogin } from "../components/auth/FormLogin";
import "../styles/login/formLoginStyle.css";

export const Login = () => {
  return (
    <div className="cr-content container-fluid">
      <div
        className="row"
        style={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-6 col-lg-4">
          <div className="card card-body">
            <FormLogin />
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};
