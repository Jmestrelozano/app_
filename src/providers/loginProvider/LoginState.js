import React, { useReducer } from "react";
import { INFO_LOGIN } from "../../type/types";

import { LoginContext } from "./LoginContext";
import LoginReducer from "./LoginReducer";

const LoginState = ({ children }) => {
  const initialState = {
    info_login: {
      token: "",
      uid: "",
      refreshToken: "",
      email: "",
    },
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const setInfo_login = (value) => {
    try {
      dispatch({
        type: INFO_LOGIN,
        payload: value,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        info_login: state.info_login,

        setInfo_login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginState;
