import { Route, Routes, Navigate } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import RequireAuth from "./context/RequireAuth";
import { AuthProvider } from "./context/AuthCtx";
import NotAble from "./pages/notAble";
import NotFound from "./pages/NotFound";
import { Checkout } from "./pages/Checkout";
import { Order } from "./pages/Order";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Store from "./pages/Store";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ShoppingCartProvider>
          <SidebarProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Public Routes */}
                <Route index element={<Login />} />
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
                  path="store"
                  element={
                    <RequireAuth>
                      <Store />
                    </RequireAuth>
                  }
                ></Route>

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

              <Route path="/404" element={<NotFound />}></Route>

              <Route path="*" element={<Navigate replace to="/404" />}></Route>
            </Routes>
          </SidebarProvider>
        </ShoppingCartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
