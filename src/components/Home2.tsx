import React from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { selectUser, selectToken } from "../features/authSlice";
import { auth } from "../firebaseConfig";
import "../styles/home.css";

type Props = {};

const Home2 = (props: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const token = useAppSelector(selectToken);
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      auth.signOut();
      navigate("/");
    }
  };
  console.log(`user: ${user}`);
  console.log(`token: ${token}`);

  return (
    <div className="home-container">
      <div className="content">
        <h1>Securely logged in</h1>
        <div className="info">
          <img alt="" />
        </div>
        <div className="info">
          <p>Id:</p>
          <span>{user}</span>
        </div>
        <div className="info">
          <p>Name:</p> <span>{String(user).split("@")[0]}</span>
        </div>
        <div className="info">
          <p>Token:</p> <span>{user}</span>
        </div>

        <button onClick={handleLogout}>Logout</button>
        <div className="info">
          <p>Last login : {user}</p>
        </div>
      </div>
    </div>
  );
};

export default Home2;
