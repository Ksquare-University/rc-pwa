import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import RequireAuth from "./context/RequireAuth";
import { AuthProvider } from "./context/AuthCtx";
import NotAble from "./pages/notAble";

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
