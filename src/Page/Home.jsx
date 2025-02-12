import Banner from "../component/Banner";
import FacilitiesData from "../component/facilitiesData ";
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
      <div className="w-11/12 mx-auto">
        <FacilitiesData></FacilitiesData>
      </div>
      
    </>
  );
};

export default Home;