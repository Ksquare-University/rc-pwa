import { Container } from "@mui/system";
import CarouselComponent from "../components/Carousel";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import ResContainer from "../components/ResContainer";
import "../styles/home.css";
import { Container as ContainerBS, } from "react-bootstrap";
import { Navbar } from "../components/Navbar";



type Props = {};

const Home = (props: Props) => {

  return (
    <div className="home-container">
      <Navbar />
      <HomeBanner />
      <CarouselComponent />
      <ResContainer />
      <Footer />
    </div>
  );
};

export default Home;
