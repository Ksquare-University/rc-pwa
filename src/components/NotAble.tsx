import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "../styles/notAble.css";

const NotAble = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="notAbleContainer">
      <TfiFaceSad className="sadFace" />
      <h2>Not available at your city</h2>
      <h3>At the moment we only have service at Mérida City</h3>
      <button onClick={goBack}>Go out</button>
    </div>
  );
};

export default NotAble;
