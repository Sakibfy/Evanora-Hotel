import Banner from "../component/Banner";
import Map from "../component/Map";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
    <div className="w-11/12 mx-auto"><Map></Map></div>
    </div>
  );
};

export default Home;