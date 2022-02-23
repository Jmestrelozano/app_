import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { types_global } from "../reducers/globalReducer/typesGlobal";
import { types_Login } from "../reducers/loginReducer/typesLogin";

export const sectionLoginUser = async (user, password, dispatch) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  const raw = JSON.stringify({
    user,
    pass: password,
    accion: "login",
  });

  const requestOptions = {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: headers,
    body: raw,
  };

  try {
    const resp = await fetch(
      "https://smt.vimsoft.co/mantrad/modelo/login/login.php",
      requestOptions
    );
    const result = await resp.json();
    if (result.resp === "ERROR") {
      NotificationManager.error(result.msj, "error", 3000);
      /*ACCION DE MI AUTH_LOGIN */
      dispatch({ type: types_Login.AUTH_STATUS, payload: { sucess: false, resp: result.resp } });
    } else {
      /*ACCION DE MI INFO_LOGIN */

      dispatch({
        type: types_Login.INFO_LOGIN,
        payload: {
          perfDesc: result.perfDesc,
          usuario: result.usuario,
          foto: result.ruta,
          numPerfil: result.perfil,
          estado: result.estado,
          infoGlobla: result.infoGlobal,
        },
      });
      /*ACCION DE MI AUTH_LOGIN */
      dispatch({ type: types_Login.AUTH_STATUS, payload: { sucess: true, resp: result.resp } });

      /* ACCION DE MI MENU_USER */
      dispatch({
        type: types_global.MENU_USER,
        payload: JSON.parse(JSON.stringify(eval("(" + result.menu + ")"))),
      });
    }
  } catch (error) {
    NotificationManager.error(error, "error");
  }
};
// console.log(JSON.parse(JSON.stringify(eval("(" + v + ")"))));
