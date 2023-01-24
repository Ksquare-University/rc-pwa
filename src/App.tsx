import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import RequireAuth from "./context/RequireAuth";
import { AuthProvider } from "./context/AuthCtx";
import NotAble from "./pages/notAble";
import React, {FC, useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ReactComponent as RappiIcon } from './svg/rappi.svg';
import { ReactComponent as CartIcon } from './svg/cart.svg';
import { ReactComponent as DopdownIcon } from './svg/dropdown.svg';
import { ReactComponent as HamMenu } from './svg/hamMenu.svg';
import { ReactComponent as PinIcon } from './svg/pin.svg';
import { ReactComponent as LoginIcon } from './svg/loginLogo.svg';
import { ReactComponent as RappiLogo } from './svg/rappiLogo.svg';
import {Navbar} from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { Restaurantes } from './pages/restaurantes';
import { About } from './pages/about';
import { ShoppingCartProvider } from './context/shoppingCartContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<Public />} />
            <Route path="login" element={<Login />} />

            {/* Private Routes */}
            <Route
              path="home"
              element={
                <RequireAuth>
                  <ShoppingCartProvider>
                    <Home />
                      <Navbar />
                        <Container className="mb-4">
                          <Routes>
                            <Route path="/" element={<Home />}>
                              
                            </Route>
                            <Route path="/restaurantes" element={<Restaurantes />}>

                            </Route>
                            <Route path="/about" element={<About />}>

                            </Route>
                          </Routes>
                        </Container>
                        </ShoppingCartProvider>
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="notAble"
            element={
              <RequireAuth>
                <NotAble />
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
