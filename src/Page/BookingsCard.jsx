
import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";


const BookingsCard = ({ bookdata, setDelete, deleterooms }) => {
  
  const [newtDate, setStartDate] = useState('')
  
  const { name, image, description, price, startDate, _id } = bookdata
 
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
          const remainingRoom = deleterooms.filter(roo => roo._id !== _id)
          setDelete(remainingRoom);  
          
        }
    })
  }
});  
  } 
 
   const hadleUpdatedate = async () => {
    const updateData = { 
      newtDate, 
    };
    //  console.log("update Confirmation Data:", updateData);
     
     fetch(`https://evanora-hotel-server.vercel.app/bookingroom/${_id}`,{
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
  return (
    <div className="border-2 p-2 rounded-lg ">
      <img
            src={image}
              alt={name}
            className="duration-300 hover:scale-105 mx-auto w-full rounded-md  object-cover my-2"
          />
      <div className="mt-3 p-3"> <p className=" text-2xl font-bold">Name: {name}</p>
        <p className="font-semibold text-[20px]">Price: ${price}</p>
      <p className="text-[18px] font-semibold">Description: {description}</p>
      <p className="text-[18px] font-semibold">Date: {startDate}</p></div>
      <div className='text-right flex justify-end mt-5'>
        <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="px-5 py-3 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white mr-5 text-[16px] border rounded-md border-white outline-none ">update Date</button>
        <button onClick={() => handleDelete(_id)} className=" py-2 px-3 border  border-red-700 rounded-lg hover:bg-slate-300 duration-300 text-red-700 font-semibold ">Cancel</button>
        
      </div>

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
    </div>    
      
  );
};

export default BookingsCard;