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
        className="mySwiper sm:h-[734px] md:[740px] w-full"
              >
        
           4<SwiperSlide className='relative inset-0  opacity-100'>

               <img  src={img3} />
             
              
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img  src={img2} />
           
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img1} />
         
          </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  );
};

export default Banner;