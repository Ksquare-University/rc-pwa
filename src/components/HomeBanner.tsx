import "../styles/homeBanner.css";
import { useAuth } from "../context/AuthCtx";
import { Navigate, useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const { logOut } = useAuth(); // contiene el contexto de autenticación, podemos acceder a sus props
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
  };

  // Esta funcion se va a borrar ya que sirva la navbar
  const handleRedirect = async () => {
    navigate("/checkout")
  };


  return (
    <div className="banner">
      <h2>Restaurantes a Domicilio</h2>
      <p className="closeSesion" onClick={handleLogout}>
        Salir
      </p>
      {/* Este link de checkout se va a borrar ya que sirva la navbar */}
      <p className="closeSesion" onClick={handleRedirect}>
        Ir al checkout
      </p>
    </div>
  );
};

export default HomeBanner;
