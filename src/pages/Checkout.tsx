import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import styles from "../styles/order.module.css";
import "../styles/order.css";
import cashImg from "../imgs/cash.png";
// To import svg icons its important to use the ReactComponent as IconName
import { ReactComponent as Back } from "../imgs/goBack.svg";
import { ReactComponent as RappiLogo } from "../imgs/rappilogo.svg";
// Imports para los componentes desplegables
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { orderDetails } from "../features/orderSlice";

type Props = {};

export const Checkout = (props: Props) => {
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [tip, setTip] = useState("");
  const [isMissing, setIsMissing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirect = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(
      orderDetails({
        address: address,
        reference: reference,
        tip: tip,
      })
    );
    
    if (address === "" || tip === ""){
      setIsMissing(true);
    } else {
      navigate("/order");
    }
  };

  useEffect(() => {
    setIsMissing(false);
  }, [address, tip])

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
        </header>

        <section>
          <div className="round-box">
            <h5>Dirección de entrega</h5>
            <hr /> 
            <div>
              <small className={
                  isMissing ? "missing-data" : ""
                }>Ingresa tu dirección *</small>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Calle 3 #54 x 12 y 14 Colonia Montebello"
                className="address-details"
              />
              <small>Instrucciones de entrega (opcional)</small>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Casa de 2 pisos en esquina"
                className="address-details"
              />
            </div>
          </div>

          <div className="round-box">
            <div className="hztal">
              <h5>Wok Yeah!</h5>
              {/* Ingresar aquí el número de productos en el carrito */}
              <p>2 Productos</p>
            </div>
            <hr /> 
            <div className="hztal">
              {/* Ingresar aquí los respectivos productos sacados del back */}
              <ul className="ul-order">
                <li>Entrega estimada</li>
              </ul>
              {/* Ingresar aquí los respectivos costos sacados del back */}
              <ul className="ul-order">
                <li>40-50 min</li>
              </ul>
            </div>
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

          <div className="round-box">
            <div className="hztal">
              <h5>Añade una propina</h5>
              <p>El 100% de esta recompensa va para tu Rappi.</p>
            </div>
            <hr /> 
            <div className="hztal">
              <h6>¡Las entregas no serían posibles sin ellos!</h6>
            </div>
            <br />
            <small className={
                  isMissing ? "missing-data" : ""
                }>Ingresa un valor *</small>
            <div className="hztal order-tip">
              <input
                type="number"
                value={tip}
                onChange={(e) => setTip(e.target.value)}
                placeholder="15"
                className="tip"
              ></input>
              <p>MXN</p>
            </div>
          </div>
        </section>

        {/* Esta sección es del menú lateral desplegable con el resumen de la orden */}
        <aside>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5> Resumen</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* <hr /> */}
                <div className="hztal">
                  <ul className="ul-order">
                    <li>Productos:</li>
                    <li>Propina:</li>
                    <li>Costo del servicio:</li>
                    <li>Costo de envío:</li>
                    <li>Descuento:</li>
                    <li>
                      <strong>Total:</strong>{" "}
                    </li>
                  </ul>
                  {/* Ingresar aquí los respectivos costos sacados del back */}
                  <ul className="ul-order">
                    <li>$219</li>
                    <li>${tip ? tip : 0}</li>
                    <li>$15</li>
                    <li>$5</li>
                    <li>$0</li>
                    <li>
                      <strong>$249</strong>{" "}
                    </li>
                  </ul>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <p className={
                  isMissing ? "missing-data" : "offscreen"
                }>Por favor, ingresa todos los campos obligatorios * </p>
          <button className="pedir" type="submit" onClick={handleRedirect}>
            Hacer Pedido
          </button>
        </aside>
      </main>
    </div>
  );
};
