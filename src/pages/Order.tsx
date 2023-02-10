import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectOrder } from "../features/orderSlice";
import { useAuth } from "../context/AuthCtx";
import "../styles/order.css";
import courierImg from "../imgs/courier.png";
import mapsImg from "../imgs/maps.png";
import cashImg from "../imgs/cash.png";
// To import svg icons its important to use the ReactComponent as IconName
import { ReactComponent as Car } from "../imgs/car.svg";
import { ReactComponent as Back } from "../imgs/goBack.svg";
import { ReactComponent as RappiLogo } from "../imgs/rappilogo.svg";
// Imports para los componentes desplegables
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkout } from "./Checkout";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../items.json";
import { useState } from "react";


type Props = {};

export const Order = (props: Props) => {
  const order = useSelector(selectOrder);
  const { user } = useAuth();
  const { cartItems, cartQuantity } = useShoppingCart();
  const [tip, setTip] = useState("");

  if (!order) {
    return <Checkout />;
  }

  return (
    <div className="order">
      <main className="order-in-course">
        <header>
          <nav className="order-navbar">
            <Link to="/home" className="home-link">
              <Back /> <span>&emsp;</span> Volver al inicio
            </Link>
            <RappiLogo className="order-rappilogo" />
          </nav>
          <div>
            <img src={mapsImg} alt="delivery map" className="delivery-map" />
          </div>
          <div className="round-box">
            <h5>
              ¡Listo, {user.displayName.split(" ")[0]}! El restaurante está
              preparando tu orden
            </h5>
            {/* <p>Tu Rappi va en camino a tu dirección</p> */}
            <p className="listo">Creado 4:36 pm</p>
          </div>
        </header>
        <section>
          <div className="round-box">
            <h5>Alitas Mexico</h5>
          </div>

          <div className="round-box">
            <div className="hztal">
              <h5>Listado</h5>
              {/* Ingresar aquí el número de productos en el carrito */}
              <p>{cartQuantity} Productos</p>
            </div>
            <hr />
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className="round-box">
            <div className="hztal">
              <article>
                <img src={cashImg} alt="cash" className="circle" />
                <h5>Tu método de pago:</h5>
              </article>
              <p>Efectivo</p>
            </div>
          </div>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="hztal">
                  <h5>
                    Pago Total: <span>&nbsp;</span>
                  </h5>
                  {/* Ingresar aquí la suma de todos los datos sacados del redux */}
                  <h5>{formatCurrency(
                          cartItems.reduce((total, cartItem) => {
                          const item = storeItems.find((i) => i.id === cartItem.id);
                          return total + (item?.price || 0) * cartItem.quantity;
                          }, 0) + Number(tip) + 15 + 25
                      )}</h5>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="hztal">
                  <ul className="ul-order">
                    <li>Productos:</li>
                    <li>Propina:</li>
                    <li>Costo del servicio:</li>
                    <li>Costo de envío:</li>
                    <li>Descuento:</li>
                  </ul>
                  {/* Ingresar aquí los respectivos costos sacados del back */}
                  <ul className="ul-order">
                    <li>$120</li>
                    <li>${order.tip}</li>
                    <li>$15</li>
                    <li>$25</li>
                    <li>$0</li>
                  </ul>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
        <aside>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5>
                  <Car />
                  <span>&nbsp; &nbsp;</span>Detalles de envío
                </h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Dirección de entrega: <br /> <small>{order.address}</small>
                </p>
                <p className={!order.reference ? "offscreen" : ""}>
                  Referencia: <br /> <small>{order.reference}</small>
                </p>
                {/* Para la estimación, ingresar la hora de creación del pedido + 45 min aprox */}
                <p>
                  Entrega estimada: <br /> <small>05:25 PM - 05:40 PM</small>
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className="round-box">
            <p className="duda">¿Tienes alguna duda?</p>
          </div>
          <article className="round-box">
            <img src={courierImg} alt="" className="circle" />
            <div>
              <h5>Erik Alberto Vargas</h5>
              <p className="tu-rappi">Tu rappi</p>
            </div>
          </article>
        </aside>
      </main>
    </div>
  );
};
