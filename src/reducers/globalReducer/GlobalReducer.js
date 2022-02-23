import { types_global } from "./typesGlobal";

const initialState = {
  menu: [],
};
export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types_global.MENU_USER:
      console.log(action, "meni");
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};
