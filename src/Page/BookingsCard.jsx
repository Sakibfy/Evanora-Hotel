
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const BookingsCard = ({ bookdata, user,handleDelete }) => {
  
  const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);
  const [newtDate, setStartDate] = useState('')
  
  const { name, image, description, price, startDate, _id} = bookdata;

console.log(_id);

const formattedDate = new Date(startDate).toLocaleDateString("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});


  const userId = _id;
  console.log(userId);
  
 
   const hadleUpdatedate = async () => {
    const updateData = { 
      newtDate, 
    };
    //  console.log("update Confirmation Data:", updateData);
     
     fetch(`http://localhost:3000/bookingroom/${_id}`,{
       method: "PUT",
       headers: {
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(updateData)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data, _id);
        if (data.modifiedCount > 0) {
      Swal.fire({
      title: "Update!",
      text: "Date update.",
      icon: "success"
          }) 
        }
    })
  
  }
   const handleSubmit = async () => {
    const reviewsData = {comment,  rating,userId };
    console.log( reviewsData);
     try {
      const response = await axios.post('http://localhost:3000/roomreviews', reviewsData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("reviews Response:", response.data);
       toast.success("review confirmed!");   
    } catch (error) {
      console.error("Error Confirming review:", error.response ? error.response.data : error.message);
      toast.error("review failed. Please try again!");
    }
  }

  return (
    <div className="border-2 p-2 rounded-lg md:flex justify-between mb-6 h-8/12 ">
      <div className="md:w-5/12 mx-auto">
        <img
            src={image}
              alt={name}
            className="duration-300 hover:scale-105 mx-auto w-full rounded-md  object-cover my-2"
          />
      </div>
      <div>
        <div className="mt-3 p-3 space-y-3">
          <h2 className=" text-4xl font-bold ">Name: {name}</h2>
        <p className="font-semibold text-[20px]">Price: ${price}</p>
      <p className="text-[18px] font-semibold">Description: {description}</p>
          <p className="text-[18px] font-semibold">Date: {formattedDate}</p></div>
        
        <div>
          <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Review</button>
      </div>
        
      <div className='text-right flex  mt-5'>
        <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="px-5 py-3 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white mr-5 text-[16px] border rounded-md border-white outline-none ">update Date</button>
        <button onClick={() => handleDelete(_id)} className=" py-2 px-3 border  border-red-700 rounded-lg hover:bg-slate-300 duration-300 text-red-700 font-semibold ">Cancel</button>
        
      </div>
{/* update modal start */}
<dialog id="my_modal_2" className="modal">
  <div className="modal-box h-2/4 text-center ">
    <h2 className="text-[18px] font-bold "> New Date:
            <DatePicker
                selected={newtDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                className="mt-2 ml-5 bg-slate-200 text-black p-1 rounded-lg"
                />
          </h2>
          <button
          onClick={() => hadleUpdatedate(_id)}  className="px-5 mt-28 py-3 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white mr-5 text-[16px] border rounded-md border-white outline-none ">update Date</button>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
  </dialog>
        {/* update modal end */}
        
 {/* review modal start */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box space-y-6">
     <h2 className=" font-bold text-xl">Gave a Review</h2>
            <p>Name: {name}</p>
  
           <div>
          <label className="text-xl ">
        Rating:
         <input
         className="ml-3"
          type="number"
          value={rating}
          min="1"
          max="5"
          onChange={(e) => setRating(e.target.value)}
        />
              </label>
            </div>
            <div><textarea className="textarea textarea-primary w-full" placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}></textarea></div>
            <button className="btn" onClick={handleSubmit}>Submit</button>
           
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
{/* review modal end */}
      </div>
    </div>    
      
  );
};

export default BookingsCard;