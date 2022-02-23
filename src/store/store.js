import { combineReducers, createStore } from "redux";
import { GlobalReducer } from "../reducers/globalReducer/GlobalReducer";
import { LoginReducer } from "../reducers/loginReducer/LoginReducer";

const reducers = combineReducers({
  AUTH_LOGIN: LoginReducer,
  GLOBAL_INFO: GlobalReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
