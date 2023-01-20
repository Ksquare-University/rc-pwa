import "../styles/homeBanner.css";
import { useAuth } from "../context/AuthCtx";

const HomeBanner = () => {
  const { logOut } = useAuth(); // contiene el contexto de autenticación, podemos acceder a sus props

  const handleLogout = async () => {
    await logOut();
  };


  return (
    <div className="banner">
      <h2>Restaurantes a Domicilio</h2>
      <p className="closeSesion" onClick={handleLogout}>
        Salir
      </p>
    </div>
  );
};

export default HomeBanner;
