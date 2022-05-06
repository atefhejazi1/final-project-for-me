import About from "../../components/About";
import Blog from "../../components/Blog";
import LatestUpdate from "../../components/LatestUpdate";
import Map from "../../components/map";
import Notices from "../../components/Notices";
import Services from "../../components/Services";
import classes from "./styles.module.scss";
const Home = () => {
  return (
    <main className={classes.main}>
      <Notices />
      <About />
      <LatestUpdate />
      <Services />
      <Map />
      <Blog />
    </main>
  );
};

export default Home;
