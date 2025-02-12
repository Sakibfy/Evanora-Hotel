
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";

import Swal from "sweetalert2";


const BookingsCard = ({ bookdata, user,handleDelete,refetch }) => {
  const [newtDate, setStartDate] = useState()
 
  const { name, image, description, price, startDate, _id} = bookdata;

const formattedDate = new Date(startDate).toLocaleDateString("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});


 const handleUpdatedDate = async () => {
  try {
    const response = await axios.patch(`https://evanora-hotel-server.vercel.app/bookingroom/${_id}`, { newtDate: newtDate });
    
    if (response.data.modifiedCount > 0) {
      console.log("Date updated successfully:", response.data);
      Swal.fire({
        title: "Updated!",
        text: "The date has been updated successfully.",
        icon: "success",
      });
      document.getElementById(`my_modal_${_id}`).close();
      refetch()
    } else {
      console.log("No changes made:", response.data);
      Swal.fire({
        title: "No Changes!",
        text: "The date was not updated.",
        icon: "info",
      });
    }
  } catch (error) {
    console.error("Error updating the date:", error);
    Swal.fire({
      title: "Error!",
      text: "There was a problem updating the date.",
      icon: "error",
    });
  }
};

  return (
    <div className="w-full border-2 p-2 rounded-lg md:flex justify-between mb-6 ">
      <div className="md:w-6/12 pl-5">
        <img
            src={image}
              alt={name}
            className="duration-300 hover:scale-105 mx-auto w-full rounded-md  object-cover my-2"
          />
      </div>
      <div className="md:w-5/12 p-5">
        <div className="mt-3 p-3 space-y-3">
          <h2 className=" text-4xl font-bold ">Name: {name}</h2>
        <p className="font-semibold text-[20px]">Price: ${price}</p>
      <p className="text-[18px] font-semibold">Description: {description}</p>
          <p className="text-[18px] font-semibold">Date: {formattedDate}</p></div>
        
       
        
      <div className='text-right flex  mt-5'>
        <button onClick={()=>document.getElementById(`my_modal_${_id}`).showModal()} className="px-5 py-3 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white mr-5 text-[16px] border rounded-md border-white outline-none ">update Date</button>
        <button onClick={() => handleDelete(_id)} className=" py-2 px-3 border  border-red-700 rounded-lg hover:bg-slate-300 duration-300 text-red-700 font-semibold ">Cancel</button>
        
      </div>
{/* update modal start */}
<dialog id={`my_modal_${_id}`} className="modal">
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
          onClick={() => handleUpdatedDate(_id)}  className="px-5 mt-28 py-3 font-bold bg-[#775242] duration-500 hover:bg- text-white mr-5 text-[16px] border rounded-md border-white outline-none ">update Date</button>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
  </dialog>
        {/* update modal end */}
 
      </div>
    </div>    
      
  );
};

export default BookingsCard;