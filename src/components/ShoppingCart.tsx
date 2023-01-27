import { Offcanvas, Stack, Button, Nav } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../items.json";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { ReactComponent as Pin } from "../svg/pin.svg";
import * as RiIcons from 'react-icons/ri';
import '../styles/shoppingCart.css'

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header>
        <Offcanvas.Title>Tu canasta</Offcanvas.Title>
        <button className="closebtn" onClick={closeCart}>&times;</button>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <div className="ubicacion">
      <Nav.Link to="/home" as={NavLink}>
          <Pin />
          Mérida
        </Nav.Link>
      </div>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <div className="checkout">
            <button onClick={closeCart}><Nav><Nav.Link to='/checkout' className="text-white" as={NavLink}>Comprar canasta</Nav.Link></Nav></button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
