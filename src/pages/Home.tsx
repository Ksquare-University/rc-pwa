// import { useSelector } from "react-redux";
// import { useAppSelector } from "../app/hooks";
// import { selectUid, selectEmail } from "../features/userSlice";
// import { selectUser, selectToken } from "../features/authSlice";
// import { auth } from "../firebaseConfig";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthCtx";
import "../styles/home.css";

type Props = {};

const Home = (props: Props) => {
  // const uid = useAppSelector(selectUid);
  // const email = useAppSelector(selectEmail);
  // const user = useAppSelector(selectUser);
  // const token = useAppSelector(selectToken);
  const { user, logOut, loading } = useAuth(); // contiene el contexto de autenticación, podemos acceder a sus props

  const handleLogout = async () => {
    await logOut();
  };

  if (loading) {
    return <h1>Loading ....</h1>;
  }

  const welcome = user ? `Hola, ${user.displayName}!` : "Bievenid@!!!";

  console.log(user.accessToken); // para facilitar el copy paste en postman

  return (
    <div className="home-container">
      <div className="content">
        <h2>Restaurantes a Domicilio</h2>
        <h1>{welcome}</h1>
        <div className="info">
          <img alt="" />
        </div>
        <div className="info">
          <p>User ID:</p>
          <span>{user.uid}</span>
        </div>
        <div className="info">
          <p>Email:</p> <span>{user.email}</span>
        </div>
        <div className="info">
          <p>
            Rol: <br />
          </p>{" "}
          <span>
            {user.reloadUserInfo.customAttributes &&
              user.reloadUserInfo.customAttributes.split('"')[3]}
          </span>
        </div>

        <button onClick={handleLogout}>Salir</button>
      </div>
    </div>
  );
};

export default Home;
