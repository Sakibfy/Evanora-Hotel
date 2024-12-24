import Banner from "../component/Banner";
import Map from "../component/Map";
import FeaturedRooms from "./FeaturedRooms";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
    <div className="w-11/12 mx-auto"><FeaturedRooms></FeaturedRooms></div>
    <div className="w-11/12 mx-auto"><Map></Map></div>
    </div>
  );
};

export default Home;