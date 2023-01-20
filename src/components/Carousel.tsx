import { MenuItems, responsive, Restaurants } from "./Data";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import MenuCard from "./MenuCard";
import RestaurantCard from "./RestaurantCard";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = () => {
  //Main restaurant state
  const [isMainData, setMainData] = useState(
    Restaurants.filter(
      (element) =>
        element.itemId === "burger01" ||
        "sushi01" ||
        "healty01" ||
        "pizza01" ||
        "hotdog" ||
        "taco01"
    )
  );

  useEffect(() => {}, [isMainData]);

  const setData = (itemId: string) => {
    setMainData(Restaurants.filter((element) => element.itemId === itemId));
  };

  const resetMain = () => {
    const menuCards = document.querySelectorAll(".rowMenuCard");
    menuCards.forEach((n) => n.classList.remove("active"));
    setMainData(
      Restaurants.filter(
        (element) =>
          element.itemId === "burger01" ||
          "sushi01" ||
          "healty01" ||
          "pizza01" ||
          "hotdog" ||
          "taco01"
      )
    );
  };

  return (
    <div>
      <Carousel
        className="rowContainer"
        responsive={responsive}
        showDots={true}
      >
        {MenuItems &&
          MenuItems.map((data) => (
            <div key={data.id} onClick={() => setData(data.itemId)}>
              <MenuCard imgSrc={data.imgSrc} name={data.name} />
            </div>
          ))}
      </Carousel>
      <div className="dishitemContainer">
        {isMainData &&
          isMainData.map((data) => (
            <RestaurantCard
              key={data.id}
              id={data.id}
              imgSrc={data.imgSrc}
              name={data.name}
            />
          ))}
      </div>
      <div className="buttonContainer">
        <button onClick={resetMain}>Quitar filtros</button>
      </div>
    </div>
  );
};

export default CarouselComponent;
