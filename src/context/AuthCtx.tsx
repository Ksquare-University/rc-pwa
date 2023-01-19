import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Este componente es un HOC -> Higher order component

interface IAuthContext {
  user: any;
  signUp: (email: string, password: string) => Promise<string | void>;
  logIn: (email: string, password: string) => Promise<string | void>;
  logOut: () => any;
  loading: any;
}

let AuthContext = createContext<IAuthContext>(null!);

interface Props {
  children?: JSX.Element;
}

// Type Props to avoid error in the props that we enter
export const AuthProvider = ({ children }: Props) => {

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email: string, password: string) => {
    const newUser = createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log("¡Usuario creado con éxito!");
        console.log(data.user);
      })
      .catch((err) => {
        console.error(err);
        const errMsg: string = (err.message).split(":")[1];
        return errMsg;
      });
    return newUser;
  };

  const logIn = (email: string, password: string) => {
    const loggedUser = signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log("Inicio de sesión exitoso");
        console.log(data.user);
      })
      .catch((err) => {
        console.error(err);
        const errMsg: string = (err.message).split(":")[1];
        return errMsg;
      });
    return loggedUser;
  };

  const logOut = () => {
    // if (window.confirm("Are you sure you want to log out?")) {
      signOut(auth);
    // }
  };

  // checks for auth change to update the user
  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
  }, []);

  return (
    // Con esto, todos los valores = {} serán accesibles desde los componentes hijos
    <AuthContext.Provider value={{ user, signUp, logIn, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// Custom hook 
// Facilita la importacion del contexto en otros archivos y nos deja acceder a sus valores
export function useAuth() {
  return useContext(AuthContext);
}


