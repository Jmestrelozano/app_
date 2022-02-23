import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fireConfig from "../../firebase/fire";
import { types_Login } from "../../reducers/loginReducer/typesLogin";

export const Navbar = () => {
  const dispatch = useDispatch();

  const { info_login } = useSelector((state) => state.AUTH_LOGIN);
  const { usuario, foto } = info_login;

  const handleSingOut = () => {
    dispatch({ type: types_Login.RESET_INFO_LOGIN });
    dispatch({ type: types_Login.AUTH_STATUS, payload: { sucesss: false, resp: "ERROR" } });
    fireConfig.auth().signOut();
  };

  return (
    <nav className="cr-header bg-white shadow-lg  navbar navbar-expand navbar-light">
      <ul className="mr-2 navbar-nav">
        <button type="button" className="btn btn-outline-secondary">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="25"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"></path>
          </svg>
        </button>
      </ul>
      <ul className="w-100 navbar-nav">
        <i onClick={handleSingOut} style={{ fontSize: "1.5rem" }} className="bi bi-power"></i>
      </ul>
      <ul className="d-flex justify-content-end w-100 navbar-nav">
        <li className="d-inline-flex nav-item">
          <a id="Popover1" className="position-relative nav-link">
            <div className="d-inline-block position-relative">
              <p>{usuario}</p>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a id="Popover2" className="nav-link">
            <img
              src={foto}
              className="rounded-circle can-click"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
