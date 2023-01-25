import { MenuItems, responsive, Restaurants } from "./Data";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import MenuCard from "./MenuCard";
import "react-multi-carousel/lib/styles.css";
import { Grid } from "@mui/material";
import "../styles/ResContainer.css";
import ResCard from "./ResCard";

const CarouselComponent = () => {
  //Main restaurant state
  const [isMainData, setMainData] = useState(
    Restaurants.filter(
      (element) =>
        element.categoria === "rapida" ||
        "italiana" ||
        "mexicana" ||
        "tex-mex" ||
        "tacos"
    )
  );

  useEffect(() => {}, [isMainData]);

  const setData = (categoria: string) => {
    setMainData(
      Restaurants.filter((element) => element.categoria === categoria)
    );
  };

  const resetMain = () => {
    const menuCards = document.querySelectorAll(".rowMenuCard");
    menuCards.forEach((n) => n.classList.remove("active"));
    setMainData(
      Restaurants.filter(
        (element) =>
          element.categoria === "rapida" ||
          "italiana" ||
          "mexicana" ||
          "tex-mex" ||
          "tacos"
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
            <div key={data.id} onClick={() => setData(data.categoria)}>
              <MenuCard imgSrc={data.imgSrc} name={data.name} />
            </div>
          ))}
      </Carousel>
      <Grid
        container
        justifyContent="center"
        width={1}
        spacing={3}
        className="res-container"
      >
        {isMainData &&
          isMainData.map((post) => (
            <Grid item md={3} sm={5} xs={10} key={post.id}>
              <ResCard post={post} />
            </Grid>
          ))}
      </Grid>
      <div className="buttonContainer">
        <button onClick={resetMain}>Quitar filtros</button>
      </div>
    </div>
  );
};

export default CarouselComponent;
