import { Route, Routes, Navigate } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import RequireAuth from "./context/RequireAuth";
import { AuthProvider } from "./context/AuthCtx";
import NotAble from "./pages/notAble";
import NotFound from "./pages/notFound";
import { Checkout } from "./pages/Checkout";
import { Order } from "./pages/Order";

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
                    <Home />
                  </RequireAuth>
                }
              />

              <Route
                path="checkout"
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                }
              />

              <Route
                path="order"
                element={
                  <RequireAuth>
                    <Order />
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

            <Route path="/404" element={<NotFound/>}></Route>
            
            <Route path="*" element={<Navigate replace to="/404"/>} ></Route>
          </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
