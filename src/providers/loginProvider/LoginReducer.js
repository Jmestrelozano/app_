import { INFO_LOGIN } from "../../type/types";

const LoginReducer = (state, action) => {
  switch (action.type) {
    case INFO_LOGIN:
      const { token, uid, email, refreshToken } = action.payload;
      localStorage.setItem("INFO_LOGIN", JSON.stringify({ token, uid, email, refreshToken }));
      return {
        ...state,
        info_login: action.payload,
      };

    default:
      return state;
  }
};

export default LoginReducer;
