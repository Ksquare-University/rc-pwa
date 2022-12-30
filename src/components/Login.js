import React, { useContext, useCallback, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth'; 

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // To prevent an automatic refresh after clicking on the login button, which affects the token retrieval
  const onSubmit = (e) => {
    e.preventDefault();
  };

  // Function to login into one of the existing user accounts in our DB
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/success");
    } catch (error) {
      navigate("/fail");
      console.error(error);
      // alert(error);
    }
  }


  return (
    <div className="Auth">
      <div className="login-wrapper">
          <h1>Welcome! Please Log In</h1>
          <form onSubmit={onSubmit}> 
            <label htmlFor="email">
              <p>Email</p>
              <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
              <br/>
              <button onClick={login}>Login</button>
            </div>
          </form>
        </div>
    </div>
   );
}

export default Login;


// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // To prevent an automatic refresh after clicking on the login button, which affects the token retrieval
// const onSubmit = (e) => {
//   e.preventDefault();
// };

// // Function to login into one of the existing user accounts in our DB
// const login = async () => {
//   try {
//     const user = await signInWithEmailAndPassword(auth, email, password);
//     console.log(user);
//     history.push("/");
//   } catch (error) {
//     console.error(error);
//     // alert(error);
//   }
// }