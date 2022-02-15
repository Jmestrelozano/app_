import React, { useContext } from "react";
import { NotificationManager } from "react-notifications";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import fireConfig from "../../firebase/fire";
import { useForm } from "../../hooks/UseForm";
import { LoginContext } from "../../providers/loginProvider/LoginContext";

export const FormLogout = () => {
  const [formulario, handleChange] = useForm({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { email, password, passwordConfirm } = formulario;
  const { setInfo_login } = useContext(LoginContext);

  const handleRegister = () => {
    if (email === "" || password === "" || passwordConfirm === "") {
      NotificationManager.error("Complete todos los campos", "Datos faltantes");
    } else if (password.length <= 8) {
      NotificationManager.warning("Contraseña > 8", "Requerido", 3000);
    } else if (password !== passwordConfirm) {
      NotificationManager.error("no son iguales", "error", 3000);
    } else {
      fireConfig
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          setInfo_login({
            token: result.user.multiFactor.user.accessToken,
            uid: result.user.multiFactor.user.uid,
            refreshToken: result.user.multiFactor.user.stsTokenManager.refreshToken,
            email: result.user.multiFactor.user.email,
          });
          Navigate("/");
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
          NotificationManager.error(err.message, "error", 3000);
        });
    }
  };
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
          name="email"
          value={email}
          onChange={handleChange}
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
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="your password"
          type="password"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Confirm Password" className="">
          Confirm Password
        </label>
        <input
          name={"passwordConfirm"}
          value={passwordConfirm}
          onChange={handleChange}
          placeholder="confirm your password"
          type="password"
          className="form-control"
        />
      </div>
      <div className="form-check">
        <label className="form-check-label ">
          <input type="checkbox" className="form-check-input" /> Agree the terms and policy
        </label>
      </div>
      <hr />
      <button
        onClick={handleRegister}
        type="button"
        className="bg-gradient-theme-left border-0 btn btn-secondary btn-lg btn-block"
      >
        Signup
      </button>
      <div className="text-center pt-1">
        <h6>or</h6>
        <h6>
          <Link to={"/login"} className="text_Login">
            Login
          </Link>
        </h6>
      </div>
    </form>
  );
};
