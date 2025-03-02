import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CiLogout } from "react-icons/ci";
import navbarlogo from "../assets/navbar.logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/rooms"
          className="font-semibold text-[18px] text-white hover:border-b-2 duration-500 hover:border-gray-600"
          onClick={closeMenu}
        >
          Rooms
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/mybookings"
            className="font-semibold text-[16px] text-black hover:border-b-2 duration-500 hover:border-gray-600"
            onClick={closeMenu}
          >
            My Bookings
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar w-11/12 z-40 mx-auto relative backdrop-blur-sm">
      {/* Left Side (Logo & Mobile Menu Button) */}
      <div className="navbar-start flex items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="text-white mr-4 lg:hidden"
        >
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

        {/* Logo */}
        <Link to={"/"}>
          <img className="w-40 cursor-pointer" src={navbarlogo} alt="Hotel Logo" loading="lazy" />
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-[71px] left-0 bg-white shadow-lg p-5 w-full rounded z-50 flex flex-col items-start space-y-3">
          {navLinks}
        </ul>
      )}

      {/* Center (Desktop Links) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>

      {/* Right Side (User Info & Auth Buttons) */}
      <div className="navbar-end flex items-center">
        {user && user?.email ? (
          <div className="flex items-center space-x-3">
            {/* Profile Avatar */}
            <div className="avatar">
              <div className="md:w-10 w-8 rounded-full ring ring-offset-2 ring-offset-base-100">
                <img src={user?.photoURL} alt="User Avatar" loading="lazy" />
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={logOut}
              className="md:p-3 p-2 border-2 shadow-md border-white text-[12px] text-gray-700 font-semibold md:text-[16px] rounded flex items-center"
            >
              Log-Out <CiLogout className="text-2xl md:ml-2 ml-0" />
            </button>
          </div>
        ) : (
          <div className="flex space-x-3">
            <Link to="/login">
              <button className="md:px-5 px-3 py-2 md:py-3 font-bold duration-500 hover:bg-gray-100 hover:text-black text-white border-2 bg-[#715d54] border-white text-[16px] rounded">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="md:px-5 px-3 py-2 md:py-3 font-bold border-2 border-white duration-500 bg-[#715d54] hover:bg-gray-100 hover:text-black text-white text-[16px] rounded">
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
