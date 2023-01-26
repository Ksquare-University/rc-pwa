import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "../styles/notAble.css";

type Props = {};

const NotFound = (props: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/home");
  };
  return (
    <div className="notAbleContainer">
      <TfiFaceSad className="sadFace" />
      <h1>Error 404:</h1>
      <h3>Página no encontrada</h3>

      <button onClick={goBack}>Volver al inicio</button>
    </div>
  );
};

export default NotFound;