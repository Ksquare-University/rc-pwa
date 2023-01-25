import { Button, Nav, Container, Navbar as NavbarBS} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ReactComponent as CartIcon } from '../svg/cart.svg';

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <NavbarBS sticky='top' className='shadow-sm mb-4'>
            <Container>
                this should be the navbar
                <Nav className='me-auto'>
                    <Nav.Link to={'/Home'} as={NavLink}>Home</Nav.Link>
                    <Nav.Link to={'/About'} as={NavLink}>About</Nav.Link>
                    <Nav.Link to={'/Restaurantes'} as={NavLink}>Restaurantes</Nav.Link>
                </Nav>
                <Button 
                onClick={openCart}
                style={{position: "relative"}}
                variant='outline-primary'>
                {cartQuantity > 0 && (
                    <div 
                    className='rounded-circle 
                    bg-danger d-flex 
                    justify-content-center 
                    align-items-center' 
                    style={{color:"white", 
                    width:"1.5rem", height: "1.5rem", 
                    position: "absolute", bottom: "0", 
                    right: "0", 
                    transform: "translate(25%, 25%"}}>
                    {cartQuantity}
                    </div>
                )}
                    <CartIcon />
                </Button>
            </Container>
        </NavbarBS>
    )
}