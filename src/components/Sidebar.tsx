import { Offcanvas, Stack, Nav, Button } from "react-bootstrap";
import { useSidebar } from "../context/SidebarContext";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ReactComponent as RappiLogo } from "../svg/rappiLogo.svg";
import "../styles/sidebar.css";
import { useAuth } from "../context/AuthCtx";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
};

export function Sidebar({ isOpen }: SidebarProps) {
  const { closeSidebar } = useSidebar();
  const { logOut, user } = useAuth(); // contiene el contexto de autenticación, podemos acceder a sus props
  const navigate = useNavigate();

  const handleLogout = async () => {
    closeSidebar(); // isOpen = false

    await logOut();
    // if (!isOpen){
    //   // navigate("/login")
    // }
  };

  return (
    // user ?
    <Offcanvas show={isOpen} onHide={closeSidebar} placement="start">
      <Offcanvas.Header>
        <Offcanvas.Title>
          <Nav>
            <Nav.Link to="/home" as={NavLink}>
              <RappiLogo onClick={closeSidebar} />
            </Nav.Link>
          </Nav>
        </Offcanvas.Title>
        <button>
          <RiIcons.RiCloseFill size={20} onClick={closeSidebar} />
        </button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="sidebar-menu">
          <div className="order">
            <Nav>
              <Nav.Link to="/order" className="text-dark" as={NavLink}>
                <button>1</button>Pedidos en curso
              </Nav.Link>
            </Nav>
          </div>
          <div className="secciones">
            SECCIONES
            {/* <p>({user} !== "") ? Hola {user.displayName} : " " </p>; */}
            <Nav>
              <Nav.Link to="/store" className="text-secondary" as={NavLink}>
                Restaurantes <MdIcons.MdNavigateNext />
              </Nav.Link>
            </Nav>
          </div>
          <div className="otros">
            OTROS
            <Nav>
              <Nav.Link className="text-secondary" to="/home" as={NavLink}>
                Registra tu Restaurante
              </Nav.Link>
            </Nav>
          </div>
          <div className="login-buttons">
            <button>
              <Nav>
                <Nav.Link
                  to="/login"
                  className="text-white"
                  as={NavLink}
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </Nav.Link>
              </Nav>
            </button>
          </div>
          <div className="pais">
            {" "}
            <img
              className="flag"
              src="https://images.rappi.com/web-assets/mx-flag.png"
              alt="Mexico"
            />{" "}
            Mexico
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
    // : navigate("/login")
  );
}
