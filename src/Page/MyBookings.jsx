import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingsCard from "./BookingsCard";


const MyBookings = () => {
   const bookingData = useLoaderData();
   const [allrooms, setRooms] = useState(bookingData);
  console.log(allrooms);
  
  return (
    <div>
      <h2 className="text-4xl pb-5 font-bold text-[#4ca98d] duration-500 hover:text-[#438c76]  text-center mb-6  items-center ">My Booked Room </h2>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto gap-8 mb-4'>
      {
          allrooms.map(bookdata => <BookingsCard
          key={bookdata._id}
          bookdata={bookdata}
          allrooms={allrooms}
          setRooms={setRooms}
          ></BookingsCard>)
        
        }
        </div>
      
    </div>
  );
};

export default MyBookings;