import { useEffect, useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import loginImg from "../imgs/login.png";
import registerImg from "../imgs/register.png";
import { useAuth } from "../context/AuthCtx";
import useFetchIP from "../hooks/useFetchIP";

type Props = {};

const Login = (props: Props) => {

  const navigate = useNavigate();
  const { user, logIn, signUp } = useAuth(); // aqui tenemnos un objeto que contiene el contexto de autenticación, podemos acceder a sus props

  const [isRegistered, setIsRegistered] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [city] = useFetchIP();

  // Para borrar el msj de error (si es que había dado uno) cuando se modifican los campos de email y pwd
  useEffect(() => {
    setErrMsg("");
  }, [email, password, isRegistered]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    isRegistered ? handleRegister() : handleLogIn();
  };

  const handleLogIn = async () => {
    if (email && password !== "") {
      const loggedIn = await logIn(email, password);
      if (typeof loggedIn === "string") {
        setErrMsg(`${loggedIn}`);
      }
      if (city === "Mérida") {
        user.reloadUserInfo.customAttributes.split('"')[3] === "customer"
        ? navigate("/home")
        : setErrMsg("Error: You must have a customer role to login");
      } else {
        navigate("/notAble");
      }
    } else {
      setErrMsg("Error: Both fields are required");
    }
  };

  const handleRegister = async () => {
    if (email && password !== "") {
      const signedUp = await signUp(email, password);
      typeof signedUp === "string"
        ? setErrMsg(`${signedUp}`)
        : setSuccessMsg("Usuario registrado! Ya puedes iniciar sesión");
    } else {
      setErrMsg("Error: Both fields are required");
    }
  };

  return (
    <main className="welcome">
      <div className="login-container">
        <section className="img-container">
          {!isRegistered ? (
            <img src={loginImg} alt="Identificarse" />
          ) : (
            <img src={registerImg} alt="Registrarse" />
          )}
        </section>
        <section className="form-container">
          <form className="form">
            <h1>{isRegistered ? "Regístrate" : "Iniciar sesión"}</h1>
            <div className="content">
              <p
                className={
                  (!isRegistered || isRegistered) && errMsg
                    ? "error-msg"
                    : "offscreen"
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
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
