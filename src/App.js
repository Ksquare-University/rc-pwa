import React, {Fragment} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Fail from './components/Fail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Auth'; //'reactfire';
import PrivateRoute from './PrivateRoute';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Fragment>
            <Routes>
              {/* <Route path='/' element={<PrivateRoute/>}> */}
                <Route exact path='/success' element={<Home/>}/>
                <Route exact path='/fail' element={<Fail/>}/>
              {/* </Route> */}
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
          </Fragment>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


