import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
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
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="featured-rooms py-10"
    >
      <hr />
      <p className="text-center">Rooms</p>
      <h2 className="text-3xl font-bold text-center mb-8 mt-3">Hand Picked Rooms</h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <motion.div
            key={room._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="room-card shadow-md rounded-lg bg-[#715d54]"
          >
            <Link to={`/roomdetails/${room._id}`}>
              <div className="p-6">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 rounded-md object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl text-white font-semibold">{room.name}</h3>
                  <p className="text-white mb-4">{room.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Rooms;
