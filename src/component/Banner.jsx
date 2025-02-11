
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from '../assets/banner.1.jpg';
import img2 from '../assets/banner.2.jpg';
import img3 from '../assets/banner.3.jpg';
import { Link } from 'react-router-dom';
// import img4 from '../assets/banner.4.jpg';







// An ode to luxury of unforgettable memories
 
const Banner = () => {
  return (
     <div className=''>
     
          <>
              
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
              >
        
           <SwiperSlide className='relative '>

               <img  src={img1} />
             
               <div className='absolute md:top-80 top-20 space-y-2 left-16 
           md:space-y-10 md:left-20  text-white'>
                            
               <button className=' md:border-2 md:p-2 md:text-2xl text-[10px]'>Relax, Refresh, Rejuvenate Here</button>
            <h2 className='uppercase  md:text-5xl text-xl font-bold '>Wake Up to Breathtaking Views</h2>
              <button className="md:px-5 px-3 py-2 md:py-3 font-bold duration-500 bg-white text-black hover:bg-transparent  hover:border-2 hover:border-white mr-3 text-[16px] rounded outline-none">
                More
              </button>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img2} />
             <div className='absolute md:top-80 top-20 space-y-2 left-16 md:space-y-10 md:left-20  text-white'>
               <button className='uppercase md:border-2 md:p-2 md:text-3xl text-[10px]'>strong fitness clus</button>
            <h2 className='uppercase md:text-7xl text-xl font-bold'>make you be the fighter</h2>
             <Link to={'/allclasses'}>
                 <button className='absolute bg-lime-400 mt-4 text-black md:font-bold  md:p-3 p-[5px] md:text-xl text-[14px] rounded-md hover:bg-lime-500 duration-300'>Know More</button>
              </Link>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img3} />
           <div className='absolute md:top-80 top-20 space-y-2 left-16 md:space-y-10 md:left-20  text-white'>
               <button className='uppercase md:border-2 md:p-2 md:text-3xl text-[10px]'>strong fitness clus</button>
            <h2 className='uppercase md:text-7xl text-xl font-bold'>make you be the fighter</h2>
            <Link to={'/allclasses'}>
                 <button className='absolute bg-lime-400 mt-4 text-black md:font-bold  md:p-3 p-[5px] md:text-xl text-[14px] rounded-md hover:bg-lime-500 duration-300'>Know More</button>
              </Link>
           </div>
          </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  );
};

export default Banner;