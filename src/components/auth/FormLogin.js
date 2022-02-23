import React, { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useForm } from "../../hooks/UseForm";
import "react-notifications/lib/notifications.css";
import fireConfig from "../../firebase/fire";
import { Link } from "react-router-dom";
import { sectionLoginUser } from "../../apis/sectionLoginUser";
import { useDispatch } from "react-redux";
import { types_Login } from "../../reducers/loginReducer/typesLogin";
export const FormLogin = () => {
  const dispatch = useDispatch();
  const [formulario, handleChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formulario;

  const handleSendDate = () => {
    if (email === "" || password === "") {
      NotificationManager.error("Complete todos los campos", "Datos faltantes");
    } else if (password.length <= 8) {
      NotificationManager.warning("Contraseña > 8", "Requerido", 3000);
    } else {
      fireConfig
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          dispatch({
            type: types_Login.INFO_LOGIN,
            payload: {
              token: result.user.multiFactor.user.accessToken,
              uid: result.user.multiFactor.user.uid,
              refreshToken: result.user.multiFactor.user.stsTokenManager.refreshToken,
              email: result.user.multiFactor.user.email,
            },
          });
          console.log(result);
        })
        .catch((error) => {
          NotificationManager.error(error.message, "error", 3000);
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Origin", "http://localhost:3000");

    let raw = JSON.stringify({
      user: "victor",
      pass: "1474",
      accion: "login",
    });

    let requestOptions = {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: headers,
      body: raw,
    };

    fetch("https://smt.vimsoft.co/mantrad/modelo/login/login.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let v = result.menu;
        console.log(JSON.parse(JSON.stringify(eval("(" + v + ")"))));
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <form className="">
      <div className="text-center pb-4">
        <img
          src="https://reduction-admin.github.io/react-reduction/static/media/logo_200.b175e1c4.png"
          className="rounded"
          alt="logo"
          style={{ width: "60px", height: "60px", cursor: "pointer" }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Email" className="">
          Email
        </label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="your@email.com"
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Password" className="">
          Password
        </label>
        <input
          onChange={handleChange}
          name={"password"}
          value={password}
          placeholder="your password"
          type="password"
          className="form-control"
        />
      </div>
      <div className="form-check">
        <label className="form-check-label ">
          <input type="checkbox" className="form-check-input" /> Remember me
        </label>
      </div>
      <hr />
      <button
        onClick={handleSendDate}
        type="button"
        className="bg-gradient-theme-left border-0 btn btn-secondary btn-lg btn-block"
      >
        Login
      </button>
      <div className="text-center pt-1">
        <h6>or</h6>
        <h6>
          <Link to={"/Signup"} className="text_Login">
            Signup
          </Link>
        </h6>
      </div>
    </form>
  );
};
