import { useContext, useState } from "react";
import BookingsCard from "./BookingsCard";
import { useEffect } from "react";

import { AuthContext } from "../provider/AuthProvider";
import useCoustomAxios from "../component/useCoustomAxios";


const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const allbookingroom = rooms;
  const [deleterooms, setDelete] = useState(allbookingroom);
  
  const axiosSecure = useCoustomAxios()
  useEffect(() => {
    
    // axios.get(`http://localhost:3000/bookingroom?email=${user.email}`, { withCredentials: true })
    //   .then(res => setRooms(res.data))

    axiosSecure.get(`/bookingroom?email=${user.email}`)
      .then(res => setRooms(res.data));

  }, [user.email]);




  return (
    <div>
      <h2 className="text-4xl pb-5 font-bold text-[#4ca98d] duration-500 hover:text-[#438c76]  text-center mb-6  items-center ">My Booked Room</h2>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto gap-8 mb-4'>
      {
          allbookingroom.map((bookdata) => <BookingsCard
            key={bookdata._id}
            deleterooms={deleterooms}
            setDelete={setDelete}
          bookdata={bookdata}
          ></BookingsCard>)
        
        }
        </div>
      
    </div>
  );
};

export default MyBookings;