import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  
  
 

  useEffect(() => {
    // Fetch top-rated rooms from the backend
    axios
      .get("https://evanora-hotel-server.vercel.app/rooms")
      .then((response) => {
        setRooms(response.data);
      
      })
      .catch((error) => {
        console.error("Error fetching featured rooms:", error);
      });
  }, []);

  return (
    <div className="featured-rooms py-10">
      <hr />
      <h2 className="text-3xl font-bold text-center mb-8 mt-3">Available Rooms</h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            className="room-card  shadow-md rounded-lg bg-stone-300"
          ><Link to={`/roomdetails/${room._id}`}>
            <div className="p-6 hover:scale-105 duration-200 ">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 rounded-md object-cover"
                />
                  <div className="p-4">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-black mb-4">{room.description}</p>
             
            </div>
              </div>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;