
import React, {useContext} from 'react';
import { Navigate, Route, Outlet } from 'react-router-dom';
import { AuthContext } from './components/Auth'; //'reactfire';
import app from './base';
import { getAuth } from 'firebase/auth';

// acts like a wrapper over regular 
// const PrivateRoute = ({component: RouteComponent, ...rest}) => {
//     const {currentUser} = useContext(AuthContext);
    
//     return (
//         <Route {...rest} render={routeProps => !!currentUser ? 
//         (<RouteComponent {...routeProps}/>) : (<Navigate to="/login"/>
//         )}/>
//     ); 
// };

const PrivateRoute = ({ children }) => {
    // const authed = isauth() // isauth() returns true or false based on localStorage
    const auth = getAuth(app);

    return auth ? children : <Navigate to="/login" />;
  }

export default PrivateRoute;