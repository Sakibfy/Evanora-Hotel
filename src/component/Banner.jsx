import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from '../assets/ban1.jpg';
import img2 from '../assets/banner.2.jpg';
import img3 from '../assets/ban2.jpg';
import { Link } from 'react-router-dom';
// import img4 from '../assets/banner.4.jpg';




 
const Banner = () => {


  return (
     <div className='-mt-20'>
          <>  
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper sm:h-[740px] md:[740px] w-full"
              >
        
           4<SwiperSlide className='relative inset-0  opacity-100'>

               <img  src={img1} />
             
               <div className='absolute md:top-80 top-20 space-y-2 left-16 
           md:space-y-10 md:left-20  text-green-400'>
                            
               <button className=' md:border-2 md:p-2 md:text-2xl text-[10px]'>Relax, Refresh, Rejuvenate Here</button>
            <h2 className='uppercase  md:text-5xl text-xl font-bold '>Wake Up to Breathtaking Views</h2>
                    <Link to={'/rooms'}>
                    <button className="md:px-5 px-3 py-2 md:py-3 font-bold duration-500 bg-white text-black hover:bg-transparent  hover:border-2 hover:border-white mr-3 text-[16px] rounded outline-none">
                More
              </button></Link>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img  src={img2} />
             <div className='absolute  md:top-80 top-20 space-y-2 left-16 md:space-y-10 md:left-20  text-black'>
               <button className='uppercase md:border-2 md:p-2 md:text-3xl text-[10px]'>Unforgettable Stays, Every Time</button>
            <h2 className='uppercase md:text-4xl text-xl font-bold'>Escape to Tranquility – A Nature Lover’s Retreat</h2>
             <Link to={'/rooms'}>
                <button className="md:px-5 pt-4 px-3 py-2 md:py-3 font-bold duration-500 bg-white text-black hover:bg-transparent  hover:border-2 hover:border-white mr-3 text-[16px] rounded outline-none">
                More
              </button>
              </Link>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img3} />
           <div className='absolute md:top-80 top-20 space-y-2 left-16 md:space-y-10 md:left-20  text-white'>
               <button className='uppercase md:border-2 md:p-2 md:text-3xl text-[10px]'>Comfort & Style Redefined</button>
            <h2 className='uppercase md:text-5xl text-xl font-bold'>Honeymoon in Paradise – A Dream Stay Awaits</h2>
            <Link to={'/rooms'}>
                <button className="md:px-5 px-3 py-2 md:py-3 font-bold duration-500 bg-white text-black hover:bg-transparent  hover:border-2 hover:border-white mr-3 text-[16px] rounded outline-none">
                More
              </button>
              </Link>
           </div>
          </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  );
};

export default Banner;