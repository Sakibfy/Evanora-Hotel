import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  
  const sliceRooms = rooms.slice(0, 6);
 
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
    <motion.div 
      className="featured-rooms py-10"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sliceRooms.map((room, index) => (
          <motion.div
            key={room._id}
            className="room-card hover:scale-105 duration-200 bg-[#715d54] text-white shadow-md rounded-lg space-y-2 overflow-hidden w-[400px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 w-[400px]">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-white mb-4">{room.description}</p>
              <Link to={`/roomdetails/${room._id}`}>
                <motion.button
                  className="bg-white duration-500 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedRooms;
