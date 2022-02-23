import { types_Login } from "./typesLogin";

const initialState = {
  info_login: {
    token: "",
    uid: "",
    refreshToken: "",
    email: "",
  },
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types_Login.INFO_LOGIN:
      const { token, uid, email, refreshToken } = action.payload;
      localStorage.setItem("INFO_LOGIN", JSON.stringify({ token, uid, email, refreshToken }));
      return {
        ...state,
        info_login: action.payload,
      };

    case types_Login.RESET_INFO_LOGIN:
      localStorage.removeItem("INFO_LOGIN");
      return {
        ...state,
        info_login: { token: "", refreshToken: "", uid: "", email: "" },
      };

    default:
      return state;
  }
};
