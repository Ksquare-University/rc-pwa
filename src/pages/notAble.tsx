import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import useFetchIP from "../hooks/useFetchIP";
import "../styles/notAble.css";

const NotAble = () => {
  const [city] = useFetchIP();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="notAbleContainer">
      <TfiFaceSad className="sadFace" />
      <h2>No disponible en {city}</h2>
      <h3>
        Por el momento solo tenemos servicio en la ciudad de Mérida,Yucatán
      </h3>
      <button onClick={goBack}>Volver al inicio</button>
    </div>
  );
};

export default NotAble;
