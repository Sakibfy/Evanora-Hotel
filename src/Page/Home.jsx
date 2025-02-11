import Banner from "../component/Banner";
import Map from "../component/Map";
import FeaturedRooms from "./FeaturedRooms";


const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="w-11/12 mx-auto">
        <FeaturedRooms></FeaturedRooms>
      </div>
      <div>
        <Map></Map>
      </div>
    </>
  );
};

export default Home;