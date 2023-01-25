import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import "../styles/home.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home-container">
      <Navbar />
      <HomeBanner />
      <CarouselComponent />
      <Footer />
    </div>
  );
};

export default Home;
