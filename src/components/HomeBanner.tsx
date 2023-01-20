import React from "react";
import "../styles/homeBanner.css";
import { useAuth } from "../context/AuthCtx";

const HomeBanner = () => {
  const { logOut, loading } = useAuth(); // contiene el contexto de autenticación, podemos acceder a sus props

  const handleLogout = async () => {
    await logOut();
  };

  if (loading) {
    return <h1>Loading ....</h1>;
  }
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
