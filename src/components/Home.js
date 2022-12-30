import React from 'react'
import app from "../base"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const auth = getAuth(app);


const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/login");
          console.log("Signed out successfully")
      }).catch((error) => {
      console.error(error)
      });
  }
 
  return(
    <div>
        <h1>Successful Login</h1>
        <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Home