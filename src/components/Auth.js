import React, {useState, useEffect, useContext} from 'react';
import app from "../base"
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);
// To propagate data through the react component tree
export const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    
    const value ={
        currentUser
    }
    // updates user every time our auth status changes
    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    },[]);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
};
