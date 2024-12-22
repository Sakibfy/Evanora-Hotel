import { Link } from 'react-router-dom';
import banner1 from '../assets/banner.1.jpg';
import banner2 from '../assets/banner.2.jpg';
import banner3 from '../assets/banner.3.jpg';
import banner4 from '../assets/banner.4.jpg';


// An ode to luxury of unforgettable memories
 
const Banner = () => {
  return (
    <div className="carousel w-full md:h-[700px] ">
  <div id="slide1" className="carousel-item w-full relative ">
    <img
      src={ banner1} 
          className="w-full" />
        <div className='text-white absolute top-[140px] left-36 lg:top-[250px] space-y-4 lg:left-[380px] text-center shadow-inherit '>
          <h2 className='font-bold md:text-7xl text-4xl'>'Welcome To EVANORA</h2>
          <h2 className='font-semibold md:text-2xl  '>An Ode To luxury of Unforgettable Memories</h2>
          <Link to={'/rooms'}>
            <button className="px-4 mt-3 text-center  py-2 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white text-[16px]  border border-white rounded-full ">Explore Rooms</button>
          </Link>
          </div>
        <div className=''>
          
       <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">  
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
     </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={ banner2} 
          className="w-full" />
         <div className='text-white absolute top-[140px] left-36 lg:top-[250px] space-y-4 lg:left-[380px] text-center shadow-inherit '>
          <h2 className='font-bold md:text-7xl text-4xl'>'Welcome To EVANORA</h2>
          <h2 className='font-semibold md:text-2xl  '>An Ode To luxury of Unforgettable Memories</h2>
          <Link to={'/rooms'}>
            <button className="px-4 mt-3 text-center  py-2 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white text-[16px]  border border-white rounded-full ">Explore Rooms</button>
          </Link>
          </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={ banner3} 
          className="w-full" />
         <div className='text-white absolute top-[140px] left-36 lg:top-[250px] space-y-4 lg:left-[380px] text-center shadow-inherit '>
          <h2 className='font-bold md:text-7xl text-4xl'>'Welcome To EVANORA</h2>
          <h2 className='font-semibold md:text-2xl  '>An Ode To luxury of Unforgettable Memories</h2>
          <Link to={'/rooms'}>
            <button className="px-4 mt-3 text-center  py-2 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white text-[16px]  border border-white rounded-full ">Explore Rooms</button>
          </Link>
          </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={ banner4} 
          className="w-full" />
         <div className='text-white absolute top-[140px] left-36 lg:top-[250px] space-y-4 lg:left-[380px] text-center shadow-inherit '>
          <h2 className='font-bold md:text-7xl text-4xl'>'Welcome To EVANORA</h2>
          <h2 className='font-semibold md:text-2xl  '>An Ode To luxury of Unforgettable Memories</h2>
          <Link to={'/rooms'}>
            <button className="px-4 mt-3 text-center  py-2 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white text-[16px]  border border-white rounded-full ">Explore Rooms</button>
          </Link>
          </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Banner;