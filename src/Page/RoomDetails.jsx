
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";


const RoomDetails = () => {
const detailsRoom = useLoaderData();
  const nevigate = useNavigate()
   const [reviews, setReviews] = useState([]);
  const [startDate, setStartDate] = useState(new Date())


const { _id, name, price, description, image,rating } = detailsRoom


  const confirmBooking = async () => {
    const bookingData = {
     price,
      name,
      description, 
      image, 
      startDate, 
      rating,
      reviews
    };
    console.log("Booking Confirmation Data:", bookingData);
     try {
      const response = await axios.post('https://evanora-hotel-server.vercel.app/bookingroom', bookingData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Booking Response:", response.data);
       toast.success("Booking confirmed!");
       nevigate('/mybookings')
       
    } catch (error) {
      console.error("Error Confirming Booking:", error.response ? error.response.data : error.message);
      toast.error("Booking failed. Please try again!");
    }
  }
  // review
   useEffect(() => {
        fetch('https://evanora-hotel-server.vercel.app/roomreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
  
  // console.log(reviews);
  return (
    <div className="room-details-page py-10 text-center w-11/12 mx-auto">
      <hr />
        <>
        <div className="md:flex md:gap-20">
          <div className="md:w-1/2">
          
          <img
            src={image}
            alt={name}
            className="w-full mx-auto rounded-md  object-cover my-4"
          /></div>
          <div className="text-left md:ml-30 md:mt-12 ">
            <h1 className="text-4xl font-bold my-2">{name}</h1>
          <p className="text-xl font-bold">Price: ${price}</p>
            <p>{description}</p>
           

           <ul className="list-disc list-inside space-y-1 mt-2">
        {detailsRoom.features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
           
          <h2 className="text-2xl font-bold mt-8">Reviews</h2>
          {reviews.length > 0 ? (
            <ul className="reviews-list">
              {reviews.map((review) => (
                <li key={review._id} className="my-2">
                  <p>
                    <strong>{review.username}</strong>: {review.comment} -{" "}
                    <span>{review.rating}/5</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available for this room.</p>
          )}

          <button
            className="bg-[#4ca98d] duration-500 hover:bg-[#438c76]  text-white px-4 py-2 mt-4"
         onClick={()=>document.getElementById('my_modal_4').showModal()}
          >
            Book Now
          </button>
         </div>
       </div>
        </>
      
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-1xl bg-gray-500 text-white h-4/4 shadow-lg text-left">
  <h2 className="text-2xl text-center mb-3 font-bold">Booking Summary</h2>
    <>
            <img
            src={image}
              alt={name}
            className=" mx-auto rounded-md  object-cover my-2"
          />
        <p className=" text-2xl font-bold">Name: {name}</p>
        <p className="font-semibold text-[20px]">Price: ${price}</p>
        <p>Description: {description}</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
        {detailsRoom.features.map((feature, index) => (
          <li key={index} className="text-white">
            {feature}
          </li>
        ))}
      </ul>
          
       <DatePicker
       selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM/dd/yyyy"
      className="mt-2 bg-slate-300 text-black p-1 rounded-lg"
      />
           
      <div className="modal-action flex justify-between">
              <button
       onClick={confirmBooking} className="bg-[#4ca98d] duration-500 hover:bg-[#438c76]  text-white p-3 rounded-md block">Confirm Booking</button>
      <form method="dialog">
       
        <button className="text-xl btn text-red-600 font-bold">Cancel</button>
      </form>
    </div>
            </>
          
  
  </div>
</dialog>
    
      
    </div>
  );
};

export default RoomDetails;