import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CiLogout } from "react-icons/ci";
import navbarlogoi from "../assets/hotel.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const link = (
    <>
   
       <li className="">
        <NavLink to="/rooms" className="font-semibold text-[18px] text-white hover:border-b-2 duration-500 hover:border-white" onClick={closeMenu}>
          Rooms
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/mybookings" className="font-semibold text-[16px] text-white hover:border-b-2 duration-500 hover:border-white" onClick={closeMenu}>
            My Bookings
          </NavLink>
        </li>
      )}
    
    </>
  );

  return (
    <div className="navbar backdrop-blur-3xl w-11/12 z-40 mx-auto relative">
      {/* Left Side (Logo & Mobile Menu Button) */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className=" text-white mr-4 lg:hidden">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <ul className="absolute top-[71px]   bg-white  shadow-lg p-5 w-full rounded z-50 flex flex-col -left-5 items-start space-y-3">
            {link}
          </ul>
        )}

        {/* Logo */}
        <Link to={"/"}>
          <img className="w-40 cursor-pointer" src={navbarlogoi} alt="Hotel Logo" />
        </Link>
      </div>

      {/* Center (Desktop Links) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{link}</ul>
      </div>

      {/* Right Side (User Info & Auth Buttons) */}
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center space-x-3">
            {/* Profile Avatar */}
            <div className="avatar">
              <div className="md:w-10 w-8 rounded-full ring ring-offset-2 ring-offset-base-100">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </div>

            {/* Logout Button */}
            <button onClick={logOut} className="md:p-3 p-2  border-2 shadow-md border-white text-[12px] text-red-400 md:text-[16px] rounded flex items-center">
              Log-Out <CiLogout className="text-2xl md:ml-2 ml-0" />
            </button>
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
              <button className="md:px-5 px-3 py-2 md:py-3 font-bold duration-500 hover:bg-gray-100 hover:text-black text-white border-2 border-white mr-3 text-[16px] rounded outline-none">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="md:px-5 px-3 py-2 md:py-3 font-bold border-2 border-white duration-500  hover:bg-gray-100 hover:text-black text-white text-[16px] rounded outline-none">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
