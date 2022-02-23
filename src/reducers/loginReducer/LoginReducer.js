import { types_Login } from "./typesLogin";

const initialState = {
  info_login: {
    perfDesc: "",
    usuario: "",
    foto: null,
    numPerfil: null,
    estado: null,
    infoGlobla: {},
  },
  status_login: {
    sucess: false,
    res: "ERROR",
  },
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types_Login.INFO_LOGIN:
      localStorage.setItem("INFO_LOGIN", JSON.stringify(action.payload));
      return {
        ...state,
        info_login: action.payload,
      };

    case types_Login.RESET_INFO_LOGIN:
      localStorage.removeItem("INFO_LOGIN");
      localStorage.removeItem("AUTH_STATUS");
      return {
        ...state,
        info_login: { token: "", refreshToken: "", uid: "", email: "" },
      };

    case types_Login.AUTH_STATUS:
      localStorage.setItem("AUTH_STATUS", JSON.stringify(action.payload));
      return {
        ...state,
        status_login: action.payload,
      };

    default:
      return state;
  }
};
