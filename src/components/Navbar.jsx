import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/Logo.png';
import Logo1 from '../assets/Logo1.png';
import Account1 from '../assets/Account1.png';
import Account from '../assets/Account.png';
import Cart from '../assets/Cart.png';
import Cart1 from '../assets/Cart1.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="relative z-50 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <div className="flex items-center flex-shrink-0">
        <img className="w-20 h-12" src={Logo} alt="Logo" />
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex md:ml-14 md:space-x-12 md:text-blue-950 md:cursor-pointer md:font-semibold">
        <li><Link to="/" className="hover:border-b-4 hover:border-blue-950 active:text-blue-400">Home</Link></li>
        <li><Link to="/#service" className="hover:border-b-4 hover:border-blue-950 active:text-blue-400">Services</Link></li>
        <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown} className="relative">
          <Link to="/product" className="hover:border-b-4 hover:border-blue-950 active:text-blue-400">Products</Link>
          {dropdown && (
            <ul className="absolute top-full left-0 w-48 bg-white shadow-lg">
              <li><Link to="/product/information-technology" className="block px-4 py-2 hover:bg-blue-200">Information and Technology</Link></li>
              <li><Link to="/product/civil-engineering-projects" className="block px-4 py-2 hover:bg-blue-200">Civil Engineering Projects</Link></li>
              <li><Link to="/product/food-service" className="block px-4 py-2 hover:bg-blue-200">Food Service</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/#aboutus" className="hover:border-b-4 hover:border-blue-950 active:text-blue-400">About us</Link></li>
        <li><Link to="/#contactus" className="hover:border-b-4 hover:border-blue-950 active:text-blue-400">Contact us</Link></li>
      </ul>

      {/* Mobile navigation */}
      <div className="hidden md:flex md:items-center md:gap-5 md:cursor-pointer">
        <input className="rounded-lg border-blue-950 px-5 relative" type="text" placeholder="Search here..." />
        <Link to="/login"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7" src={Account1} alt="Account" /></Link>
        <Link to="/cart"><img className="w-5 h-5 active:w-7 active:h-7" src={Cart1} alt="Cart" /></Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile navigation menu */}
      <div className={nav ? "fixed top-0 left-0 w-[50%] h-full bg-blue-950 shadow-lg ease-in-out duration-1000 overflow-y-auto" : "hidden md:hidden"}>
        <img className="w-20 h-12 my-6 ml-2" src={Logo1} alt="Logo" />
        <hr className="border-2 text-white" />
        <div className="flex flex-col items-start mt-5 h-full">
          <ul className="uppercase text-start ml-5">
            <li className="text-white "><Link to="/" onClick={handleNav} className="block hover:border-b-4 hover:border-blue-950 active:text-blue-400">Home</Link></li>
            <li className="text-white "><Link to="/#service" onClick={handleNav} className="block py-3 hover:border-b-4 hover:border-blue-950 active:text-blue-400">Services</Link></li>
            <li className="text-white ">
              <Link to="/product" onClick={handleNav} className="block py-3 hover:border-b-4 hover:border-blue-950 active:text-blue-400">Products</Link>
              <ul className="ml-5 mt-2">
                <li><Link to="/product/information-technology" className="block py-2 hover:bg-blue-200">Information and Technology</Link></li>
                <li><Link to="/product/civil-engineering-projects" className="block py-2 hover:bg-blue-200">Civil Engineering Projects</Link></li>
                <li><Link to="/product/food-service" className="block py-2 hover:bg-blue-200">Food Service</Link></li>
              </ul>
            </li>
            <li className="text-white "><Link to="/#aboutus" onClick={handleNav} className="block py-3 hover:border-b-4 hover:border-blue-950 active:text-blue-400">About us</Link></li>
            <li className="text-white "><Link to="/#contactus" onClick={handleNav} className="block py-3 hover:border-b-4 hover:border-blue-950 active:text-blue-400">Contact us</Link></li>
          </ul>
          <div className="flex flex-col items-center justify-start p-4">
            <input className="rounded-3xl px-5 border-white border-2 mb-3 w-full bg-transparent" type="text" placeholder="Search here..." />
            <div className="flex gap-3 justify-start items-start">
              <Link to="/login"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7" src={Account} alt="" /></Link>
              <Link to="/cart"><img className="w-5 h-5 active:w-7 active:h-7" src={Cart} alt="Cart" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
