import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/menuCard.css";
type Props = {
  name: string;
  imgSrc: string;
};
const MenuCard = ({ imgSrc, name }: Props) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  useEffect(() => {
    //Menu card active toggle
    const menuCards = document.querySelectorAll(".rowMenuCard");

    function disableActive() {
      menuCards.forEach(() => setActive(false));
    }

    menuCards.forEach((n) => n.addEventListener("click", disableActive));
  });

  return (
    <div
      onClick={handleActive}
      className={`rowMenuCard ${active ? "active" : ""}`}
    >
      <img className="imgBox" src={imgSrc} alt=""></img>
      <p>{name}</p>
      <div className="menuHover">
        <div className="iconHover"> ✓ </div>
      </div>
    </div>
  );
};

export default MenuCard;
