import {  useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { selectOrder } from "../features/orderSlice";
import { useAuth } from '../context/AuthCtx';
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

type Props = {};

export const Order = (props: Props) => {

  const order = useSelector(selectOrder);
  const { user } = useAuth(); 

  if(!order){
    return <Checkout/>
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
            <h4>¡Listo, {user.displayName.split(" ")[0]}! El restaurante está preparando tu orden</h4>
            {/* <p>Tu Rappi va en camino a tu dirección</p> */}
            <p>Creado 4:36 pm</p>
          </div>
        </header>
        <section>
          <div className="round-box">
            <h4>Wok Yeah!</h4>
          </div>

          <div className="round-box">
            <div className="hztal">
              <h4>Listado</h4>
              {/* Ingresar aquí el número de productos en el carrito */}
              <p>2 Productos</p>
            </div>
            <br /> <hr /> <br />
            <div className="hztal">
              {/* Ingresar aquí los respectivos productos sacados del back */}
              <ul>
                <li>1 Thai wok</li>
                <li>1 Combo Mar y Tierra</li>
              </ul>
              {/* Ingresar aquí los respectivos costos sacados del back */}
              <ul>
                <li>$100</li>
                <li>$119</li>
              </ul>
            </div>
          </div>

          <div className="round-box">
            <div className="hztal">
              <article>
                <img src={cashImg} alt="cash" className="circle" />
                <h4>Tu método de pago:</h4>
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
                  <h4>
                    Pago Total: <span>&nbsp;</span>
                  </h4>
                  {/* Ingresar aquí la suma de todos los datos sacados del redux */}
                  <p>$249</p>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <hr /> <br />
                <div className="hztal">
                  <ul>
                    <li>Productos:</li>
                    <li>Propina:</li>
                    <li>Costo del servicio:</li>
                    <li>Costo de envío:</li>
                    <li>Descuento:</li>
                  </ul>
                  {/* Ingresar aquí los respectivos costos sacados del back */}
                  <ul>
                    <li>$219</li>
                    <li>${order.tip}</li>
                    <li>$15</li>
                    <li>$5</li>
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
                <h4>
                  <Car />
                  <span>&nbsp; &nbsp;</span>Detalles de envío
                </h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <hr /> <br />
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
              <h4>Erik Alberto Vargas</h4>
              <p>Tu rappi</p>
            </div>
          </article>
        </aside>
      </main>
    </div>
  );
};
