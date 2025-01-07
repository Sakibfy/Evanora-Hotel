import { useContext, useState } from "react";
import BookingsCard from "./BookingsCard";
import { useEffect } from "react";

import { AuthContext } from "../provider/AuthProvider";
import useCoustomAxios from "../component/useCoustomAxios";
import Swal from "sweetalert2";


const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  
  
  const axiosSecure = useCoustomAxios()
  useEffect(() => {
    refetch()
    

  }, [user?.email]);

  const refetch = () => {
  axiosSecure.get(`/bookingroom?email=${user.email}`)
      .then(res => setRooms(res.data));
}

  const handleDelete = _id => {   
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`https://evanora-hotel-server.vercel.app/bookingroom/${_id}`,{
    method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
      Swal.fire({
      title: "Deleted!",
      text: "Your Booked Room has been deleted.",
      icon: "success"
          })
        }
        refetch()
    })
  }
});  
  } 

  return (
    <div className="">
      <h2 className="text-4xl pb-5 font-bold duration-500  text-center mb-6  items-center ">My Booked Room</h2>
      <div className=' w-11/12 mx-auto gap-8 mb-4'>
      {
          rooms.map((bookdata) => <BookingsCard
            key={bookdata._id}
            bookdata={bookdata}
            user={user}
            handleDelete={handleDelete}
            refetch={refetch}
          ></BookingsCard>)
        
        }
        </div>
      
    </div>
  );
};

export default MyBookings;