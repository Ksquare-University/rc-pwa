import "../styles/restaurantCard.css";
type Props = {
  name: string;
  imgSrc: string;
  id: string;
};

const RestaurantCard = ({ imgSrc, name, id }: Props) => {
  return (
    <div>
      <div className="restaurantCard" id={id}>
        <img className="restaurantImage" src={imgSrc} alt="restaurant "></img>
        <p className="restaurantTitle"> {name}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
