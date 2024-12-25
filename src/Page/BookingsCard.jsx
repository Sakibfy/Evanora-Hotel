

const BookingsCard = ({ data,setRooms,rooms }) => {
  console.log(data);
const {name, image,description,price,startDate} = data

  return (
    <div className="border-2 p-2 rounded-lg">
      <img
            src={image}
              alt={name}
            className=" mx-auto rounded-md  object-cover my-2"
          />
        <p className=" text-2xl font-bold">Name: {name}</p>
        <p className="font-semibold text-[20px]">Price: ${price}</p>
      <p>Description: {description}</p>
      <p>Description: {startDate}</p>
    </div>    
      
  );
};

export default BookingsCard;