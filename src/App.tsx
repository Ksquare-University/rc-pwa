import { Route, Routes } from "react-router-dom";
//import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import RequireAuth from "./context/RequireAuth";
import { AuthProvider } from "./context/AuthCtx";
import NotAble from "./pages/notAble";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
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
                    <Home />
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
            <Route
              path="store"
              element={
                <RequireAuth>
                  <Store />
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
