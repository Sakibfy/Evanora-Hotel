import { useContext } from "react";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CiLogout } from "react-icons/ci";
import navbarlogoi from '../assets/navbar.logo.png';


const Navbar = () => {

 const { user, logOut } = useContext(AuthContext);

  const link = <>
     <button className=" font-semibold text-[18px] text-gray-700 mr-3  hover:text-[#438c76] "><NavLink to="/rooms">Rooms</NavLink></button>
     
     
    {user && (
      <>
        <button className=" font-semibold text-[16px] text-gray-700 mr-3  hover:text-[#438c76]"><NavLink to="/mybookings">My Bookings</NavLink></button>
      </>
    )} </>


  return (
    <div className='backdrop-blur-3xl bg-white  '>
      <div className="navbar  ">
        <div className="navbar-start">    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className=" menu menu-sm dropdown-content bg-slate-50 rounded-box z-[1] mt-3 w-60 p-4 space-y-3 shadow duration-1000">
        {link}
      </ul>
    </div>
    <Link to={'/'}><img className='w-40 cursor-pointer' src={ navbarlogoi} /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
        <div className="navbar-end">
          <div className="font-bold mr-3 ">
            {user && user?.email ?
              
            <div className="avatar">
         <div className="ring-offset-base-100 w-10 rounded-full ring ring-offset-2 mt-2">
                <img src={user?.photoURL} />
                <p>{ user.displayName}</p>
        </div>
          </div> 
       : ""            
      }
    
        </div>
            {
          user && user?.email ?            
            <div className="flex items-center">
              <button onClick={logOut} className="btn btn-ghost border-2 shadow-md border-[#4ca98d] text-red-400 text-[16px] rounded-md">Log-Out <CiLogout className="text-2xl font-bold text-red-400"></CiLogout></button>
            
            </div>
            :
            <div className="">
             <Link to={"/login"}><button className="px-5 py-3 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white mr-3 text-[16px] border border-white rounded-tl-3xl outline-none">Login</button> </Link>
            <Link to={"/register"}><button className="px-5 py-3 font-bold bg-[#4ca98d] duration-500 hover:bg-[#438c76] text-white text-[16px]  border border-white rounded-tl-3xl outline-none">Registar</button>
             </Link>
          </div>
        }
    
        </div>
        
</div>
</div>
  );
};

export default Navbar;