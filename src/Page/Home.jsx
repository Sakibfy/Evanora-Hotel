import Banner from "../component/Banner";
import Map from "../component/Map";
import FeaturedRooms from "./FeaturedRooms";


const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
    <div><FeaturedRooms></FeaturedRooms></div>
    <div><Map></Map></div>
    </div>
  );
};

export default Home;