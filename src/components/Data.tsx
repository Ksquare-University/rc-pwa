//Carousel

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
    categoria: "rapida",
    name: "Rápida",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/burger.jpg?alt=media&token=32d2e64b-c5c5-4452-946e-c22d35699e44",
  },
  {
    id: "2",
    categoria: "italiana",
    name: "Italiana",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/italiana.png?alt=media&token=c8812731-c0ae-4659-bd94-44fcc8502c53",
  },
  {
    id: "3",
    categoria: "mexicana",
    name: "Mexicana",
    imgSrc:
      "https://www.godinezgourmet.com/wp-content/uploads/2019/03/tortas-la-reforma-polanco-polanquito-ciudad-mexico-cdmx_0.jpg",
  },
  {
    id: "4",
    categoria: "tex-mex",
    name: "Tex-Mex",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/tex-mex.jpg?alt=media&token=1c4d38c2-7120-468f-8a10-db37158b0bff",
  },
  {
    id: "5",
    categoria: "tacos",
    name: "Tacos",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/rappi-39d97.appspot.com/o/taco.jpg?alt=media&token=bd28fcd8-0e68-44c6-8d98-2bb66989520a",
  },
];

const Restaurants = [
  {
    id: 1,
    title: "Chiki Chiki",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/0bf3843d-f6c1-4d0b-b35f-91840bb9f1ea-1668027340678.png?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/1930019376_1660236863032-modified-1660257374672.png?d=10x10&q=10&e=webp",
    rating: 5,
    costoDeEnvio: 1,
    categoria: "rapida",
  },
  {
    id: 2,
    title: "Pizza Nonna",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/ed45b9fa-3281-4bde-a0db-2108addb0c27-1619233478344-1629738582452.png?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/nonna-logo-1-1619206989310-1629738580848.png?d=10x10&q=10&e=webp",
    rating: 3,
    costoDeEnvio: 0,
    categoria: "italiana",
  },
  {
    id: 3,
    title: "Tortas al Fuego",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/tortasalfuego-1660758200451.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/900000658-1562256585960.png?d=10x10&q=10&e=webp",
    rating: 4,
    costoDeEnvio: 0,
    categoria: "mexicana",
  },
  {
    id: 4,
    title: "La Burreria",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/mxlaburreria-1670442867884.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/d73171a0-f9f3-454c-92a4-c310ef51e4f6-1631572979631.png?d=10x10&q=10&e=webp",
    rating: 4,
    costoDeEnvio: 0,
    categoria: "tex-mex",
  },
  {
    id: 5,
    title: "El Farolito",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/mxelfaarolito-1666735747950.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/10000295.png?d=10x10&q=10&e=webp",
    rating: 3,
    costoDeEnvio: 25,
    categoria: "tacos",
  },
  {
    id: 6,
    title: "Empanaderia Moto Condesa Calle",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/01-1666026500730.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/f24d244a-b960-4c6f-8981-eff85e672cab-1665872808121.png?d=10x10&q=10&e=webp",
    rating: 2,
    costoDeEnvio: 50,
    categoria: "mex",
  },
  {
    id: 7,
    title: "Taqueria los Villas Rio Lerma",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/mxtaquerialosvillas-1673646905121.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/fsdf-1672425193382.png?d=10x10&q=10&e=webp",
    rating: 5,
    costoDeEnvio: 15,
    categoria: "tacos",
  },
  {
    id: 8,
    title: "La Chinampa Autentica Taqueria",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/mxlachinampa-1666891278647.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/900000257-1551981709.png?d=10x10&q=10&e=webp",
    rating: 4,
    costoDeEnvio: 40,
    categoria: "tacos",
  },
  {
    id: 9,
    title: "Alitas Mexico",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/hamburguesas08-1663618779706.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/1-1667759806540.png?d=10x10&q=10&e=webp",
    rating: 3,
    costoDeEnvio: 25,
    categoria: "rapida",
  },
  {
    id: 10,
    title: "Taqueria El Tizoncito",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/eltizoncito-1660262055676.jpg?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/tizoncito-logo-1-1567451610382.png?d=10x10&q=10&e=webp",
    rating: 4,
    costoDeEnvio: 15,
    categoria: "tacos",
  },
  {
    id: 11,
    title: "Taqueria Selene",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/taqueriaselene-1660921168996.png?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/10621-1618951345471.png?d=10x10&q=10&e=webp",
    rating: 2,
    costoDeEnvio: 25,
    categoria: "tacos",
  },
  {
    id: 12,
    title: "Burrito Prime House",
    imageUrl:
      "https://images.rappi.com.mx/restaurants_background/b88f0f35-97b5-46d1-b6ad-7bbd443c6b13-1652254459644-1653328214526.png?e=webp&q=40&d=300x300",
    thumbnailUrl:
      "https://images.rappi.com.mx/restaurants_logo/burrito-logo-1619044809156-1629746776061.png?d=10x10&q=10&e=webp",
    rating: 5,
    costoDeEnvio: 45,
    categoria: "tex-mex",
  },
];

export { MenuItems, Restaurants, responsive };
