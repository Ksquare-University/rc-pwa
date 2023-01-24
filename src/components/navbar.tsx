import { ReactComponent as RappiIcon } from '../svg/rappi.svg';
import { ReactComponent as CartIcon } from '../svg/cart.svg';
import { ReactComponent as DopdownIcon } from '../svg/dropdown.svg';
import { ReactComponent as HamMenu } from '../svg/hamMenu.svg';
import { ReactComponent as PinIcon } from '../svg/pin.svg';
import { ReactComponent as LoginIcon } from '../svg/loginLogo.svg';
import { ReactComponent as RappiLogo } from '../svg/rappiLogo.svg';
import {FC, useState, useRef} from 'react';
import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom"
import { useShoppingCart } from '../context/shoppingCartContext';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';

export function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const { openCart, cartQuantity} = useShoppingCart()
    return(
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3 d-flex'>
            <IconContext.Provider value={{color: '#333333'}}>
            <Button variant='outline- primary'>
            <HamMenu className='hamMenu'onClick={showSidebar}/>
            </Button>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to={'#'} className='menu-bars'>
                            <RappiLogo />
                            <AiIcons.AiFillCloseCircle />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title} {item.user}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <Container className=''>
                <Nav className='me-auto d-flex align-items-center '>
                    <Nav.Link to="/" as={NavLink}>
                        <RappiIcon className=''/>
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to="/restaurantes" as={NavLink}>
                        Restaurantes
                    </Nav.Link>
                </Nav>
                <Button 
                onClick={openCart}
                style={{position: "relative"}}
                variant='outline-primary'>
                {cartQuantity >0 && (
                    <div 
                    className='rounded-circe 
                    bg-danger d-flex 
                    justify-content-center 
                    align-items-center' 
                    style={{color:"white", 
                    width:"1.5rem", height: "1.5rem", 
                    position: "absolute", bottom: "0", 
                    right: "0", 
                    transform: "translate(25%, 25%"}}
                    >{cartQuantity}
                    </div>
                )}
                    <CartIcon />
                </Button>
            </Container>
            </IconContext.Provider>
        </NavbarBs>
    )
}