//Carousel

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const MenuItems = [
  {
    id: "1",
    itemId: "buger01",
    name: "Hamburguesa",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/burger.jpg?alt=media&token=32d2e64b-c5c5-4452-946e-c22d35699e44",
  },
  {
    id: "2",
    itemId: "sushi01",
    name: "Sushi",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/sushi.jpg?alt=media&token=44e97651-a4a3-4bb3-9f6c-071752a6bff7",
  },
  {
    id: "3",
    itemId: "healty01",
    name: "Ensalada",
    imgSrc:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Three-bean-salad-with-mozzarella-deb0114.jpg",
  },
  {
    id: "4",
    itemId: "pizza01",
    name: "Pizza",
    imgSrc:
      "https://www.eluniverso.com/resizer/5N9j1EK0-8MMn30GXOMaL_y6GMI=/809x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/M7ROUAC34ZCI7AU3WN7GF4TAUY.jpg",
  },
  {
    id: "5",
    itemId: "hotdog01",
    name: "Hotdog",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/hot-dog.jpg?alt=media&token=984e5b06-6d1f-4a6e-9bf9-ec70845befdb",
  },
  {
    id: "6",
    itemId: "taco01",
    name: "Taco",
    imgSrc: "https://cdn7.kiwilimon.com/recetaimagen/13996/6330.jpg",
  },
];

const Restaurants = [
  {
    id: "1",
    itemId: "buger01",
    name: "Carls jr",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/burger.jpg?alt=media&token=32d2e64b-c5c5-4452-946e-c22d35699e44",
  },
  {
    id: "2",
    itemId: "sushi01",
    name: "Sensei",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/sushi.jpg?alt=media&token=44e97651-a4a3-4bb3-9f6c-071752a6bff7",
  },
  {
    id: "3",
    itemId: "healty01",
    name: "Super Salad",
    imgSrc:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Three-bean-salad-with-mozzarella-deb0114.jpg",
  },
  {
    id: "4",
    itemId: "pizza01",
    name: "Pizza Hut",
    imgSrc:
      "https://www.eluniverso.com/resizer/5N9j1EK0-8MMn30GXOMaL_y6GMI=/809x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/M7ROUAC34ZCI7AU3WN7GF4TAUY.jpg",
  },
  {
    id: "5",
    itemId: "hotdog01",
    name: "Super Hotdogs",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/hot-dog.jpg?alt=media&token=984e5b06-6d1f-4a6e-9bf9-ec70845befdb",
  },
  {
    id: "6",
    itemId: "taco01",
    name: "Tacos el Torero",
    imgSrc: "https://cdn7.kiwilimon.com/recetaimagen/13996/6330.jpg",
  },
];

export { MenuItems, Restaurants, responsive };
