import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";



const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar></Navbar>
      </div>
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;