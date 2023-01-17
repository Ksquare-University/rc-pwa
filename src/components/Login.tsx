import React, { useEffect, useState } from "react";
import "../styles/login.css";
import Home from "./Home";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setLogInCredentials,
  setLogOut,
  selectUser,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import loginImg from "../imgs/login.png";
import registerImg from "../imgs/register.png";
import useFetchIP from "../hooks/useFetchIP";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);

  const [city] = useFetchIP();

  const [isRegistered, setIsRegistered] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    isRegistered ? handleRegister() : handleLogIn();
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          setLogInCredentials({
            id: authUser.uid,
            name: authUser.displayName,
            lastSignIn: authUser.metadata.lastSignInTime,
            token: authUser.getIdToken(),
          })
        );
      } else {
        dispatch(setLogOut());
      }
    });
  }, [dispatch]);

  const handleLogIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log(user);
      console.log(await user.user.getIdToken());
      if (city === "Mérida") {
        navigate("/home");
      } else {
        navigate("/notAble");
      }
      //   return user;
    } catch (error) {
      setErrMsg("Algo salió mal, intenta de nuevo!");
      console.error(error);
    }
  };

  const handleRegister = () => {
    if (email && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          setSuccessMsg("Usuario registrado! Ya puedes iniciar sesión");
          console.log("Usuario creado con éxito");
          console.log(data.user);
        })
        .catch((err) => alert(err)); // when email is already in use for example
    }
  };

  return (
    <div className="welcome">
      {user ? (
        <Home />
      ) : (
        <>
          <div className="login-container">
            <div className="img-container">
              {!isRegistered ? (
                <img src={loginImg} alt="Identificarse" />
              ) : (
                <img src={registerImg} alt="Registrarse" />
              )}
            </div>
            <div className="form-container">
              <div className="form">
                <h1>{isRegistered ? "Regístrate" : "Iniciar sesión"}</h1>
                <div className="content">
                  <p
                    className={
                      !isRegistered && errMsg ? "error-msg" : "offscreen"
                    }
                  >
                    {errMsg}
                  </p>
                  <p
                    className={
                      isRegistered && successMsg ? "success-msg" : "offscreen"
                    }
                  >
                    {successMsg}
                  </p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required={true}
                    placeholder="Correo electrónico"
                  />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required={true}
                    placeholder="Contraseña"
                  />
                  <button onClick={handleSubmit} type="submit">
                    Ingresar
                  </button>

                  <p>
                    {!isRegistered
                      ? "¿Aún no te has registrado? "
                      : "¿Ya tienes una cuenta? "}
                    <span onClick={() => setIsRegistered((show) => !show)}>
                      {!isRegistered ? "Registrate aquí" : "Inicia sesión aquí"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
