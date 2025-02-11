import Banner from "../component/Banner";
import FeaturedRooms from "./FeaturedRooms";


const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="w-10/12 mx-auto">
        <FeaturedRooms></FeaturedRooms>
      </div>
      
    </>
  );
};

export default Home;