import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import RequireAuth from "./context/RequireAuth";
import { AuthProvider } from "./context/AuthCtx";
import NotAble from "./pages/notAble";
import { About } from "./pages/About";
import { Restaurantes } from "./pages/Restaurantes";
import {Navbar} from './components/Navbar'
import {ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ShoppingCartProvider>
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
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Restaurantes' element={<Restaurantes />}></Route>
          <Route
            path="notAble"
            element={
              <RequireAuth>
                <NotAble />
              </RequireAuth>
            }
          ></Route>
        </Routes>
        </ShoppingCartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
