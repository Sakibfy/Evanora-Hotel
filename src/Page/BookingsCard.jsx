import Swal from "sweetalert2";


const BookingsCard = ({ data,setRooms,rooms }) => {
  // console.log(data);
const {name, image,description,price,startDate,_id} = data

  const handleDelete = _id => {
     console.log(_id);
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
    
    fetch(`http://localhost:3000/bookingroom/${_id}`,{
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
          const remainingVisa = rooms.filter(visa => visa._id !== _id)
          setRooms(remainingVisa);  
          
        }
    })
  }
});

    
 }
   
     
  return (
    <div className="border-2 p-2 rounded-lg duration-300 hover:scale-105">
      <img
            src={image}
              alt={name}
            className=" mx-auto rounded-md  object-cover my-2"
          />
        <p className=" text-2xl font-bold">Name: {name}</p>
        <p className="font-semibold text-[20px]">Price: ${price}</p>
      <p>Description: {description}</p>
      <p>Description: {startDate}</p>
      <div className='text-right flex justify-end'>
       <button onClick={()=> handleDelete (_id)} className=" py-2 px-3 border border-red-700 rounded-lg hover:bg-slate-300 duration-300 text-red-700 font-semibold ">Cancel</button>
                </div>
    </div>    
      
  );
};

export default BookingsCard;