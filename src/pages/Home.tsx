// import { useSelector } from "react-redux";
// import { useAppSelector } from "../app/hooks";
// import { selectUid, selectEmail } from "../features/userSlice";
// import { selectUser, selectToken } from "../features/authSlice";
// import { auth } from "../firebaseConfig";
// import { useNavigate } from "react-router-dom";
import CarouselComponent from "../components/Carousel";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import { useAuth } from "../context/AuthCtx";
import "../styles/home.css";

type Props = {};

const Home = (props: Props) => {
  // const uid = useAppSelector(selectUid);
  // const email = useAppSelector(selectEmail);
  // const user = useAppSelector(selectUser);
  // const token = useAppSelector(selectToken);
  const { logOut, loading } = useAuth(); // contiene el contexto de autenticación, podemos acceder a sus props

  const handleLogout = async () => {
    await logOut();
  };

  if (loading) {
    return <h1>Loading ....</h1>;
  }

  return (
    <div className="home-container">
      <HomeBanner />
      <CarouselComponent />
      <Footer />
    </div>
  );
};

export default Home;
