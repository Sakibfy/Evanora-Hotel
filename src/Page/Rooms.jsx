import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  
 

  useEffect(() => {
    // Fetch top-rated rooms from the backend
    axios
      .get("http://localhost:3000/rooms")
      .then((response) => {
        setRooms(response.data);
      
      })
      .catch((error) => {
        console.error("Error fetching featured rooms:", error);
      });
  }, []);

  return (
    <div className="featured-rooms py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Rooms</h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="room-card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <Link to={`/roomdetails/${room._id}`}>
            <button
           className="bg-[#4ca98d] duration-500 hover:bg-[#438c76]  text-white py-2 px-4 rounded "> Book Now
           </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;