import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useSidebar } from "../context/SidebarContext";
import { ReactComponent as HamMenu } from '../svg/hamMenu.svg';
import { ReactComponent as Rappi } from '../svg/rappi.svg';
import { ReactComponent as Pin } from "../svg/pin.svg";
import { ReactComponent as CartIcon } from '../svg/cart.svg';
import '../styles/navbar.css'

const Navbar = () => {
  //Mantain shoppíng cart context
  const { openCart, cartQuantity } = useShoppingCart();
  const {openSidebar } = useSidebar()
  return (
    <NavbarBs sticky="top" className="shadow-sm">
      <div className="nav-start">
        <button className="navbtn">
            <HamMenu className='hamMenu'onClick={openSidebar}/>
        </button>
        <Nav.Link to="/home" as={NavLink}>
          <Rappi />
        </Nav.Link>
        <Nav.Link to="/home" as={NavLink}>
          <Pin />
          Mérida
        </Nav.Link>
      </div>
        {/* Shooing cart button*/}
        <div className="nav-end">
        <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <CartIcon />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
        </div>
        {/* Shooing cart button*/}
    </NavbarBs>
  );
};

export default Navbar;
