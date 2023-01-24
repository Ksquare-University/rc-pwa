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
import {Routes, Route} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Restaurantes } from './pages/restaurantes';
import { About } from './pages/about';
import { Home } from './pages/home';
import { ShoppingCartProvider } from './context/shoppingCartContext';


const App: FC = () => {
  return (
    <ShoppingCartProvider>
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
  );
}





export default App;
