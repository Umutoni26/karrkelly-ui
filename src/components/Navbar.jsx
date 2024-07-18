import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import Account from '../assets/Account.png'
// import Phone from '../assets/Phone.png'
import Cart from '../assets/Cart.png'
import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const[nav,setNav]=useState(false)

  const handleNav=() =>{
    setNav(!nav)
  }

  return (
    // <div className="Navbar">
    //    <nav className="fixed top-0 left-0 w-full z-50 bg-white py-3 shadow-2xl mx-auto">
    //      <div div className="container px-4 mx-auto relative text-sm">
    //         <div className="flex justify-around items-center">
    //           <div className="flex items-center flex-shrink-0 ">
    //             <img img className="w-20 h-12"  src={Logo} alt="" />
                
    //           </div>
    //           <div className="links ">
    //             <ul className="hidden md:flex ml-14 space-x-12 text-blue-600 cursor-pointer font-bold ">
    //               <li><Link to="/" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Home</Link></li>
    //               <li><Link to="/#service" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Services</Link></li>
    //               <li><Link to="/product" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Products</Link></li>
    //               <li><Link to="/#aboutus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">About us</Link></li>
    //               <li><Link to="/#contactus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Contact us</Link></li>
    //             </ul>
    //           </div>

    //           <div className="flex items-center gap-5 cursor-pointer ">
    //             <input className=" rounded-lg px-5 relative "  type="text" placeholder="Search here..." />
    //             <Link to="/login"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7"  src={Account} alt="" /></Link>
    //             {/* <Link to="/#contactus"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7" src={Phone} alt="" /></Link> */}
    //             <Link to="/cart"><img className="w-5 h-5 active:w-7 active:h-7 "  src={Cart} alt="" /></Link>

    //           </div>

    //           {/* mobile divice */}

    //           <div onClick={handleNav} className=" md:hidden">
    //              {!nav ? <AiOutlineClose size={30}/>: <AiOutlineMenu size={30}/>}
    //           </div>

    //           <div className={!nav? "fixed left-0 top-0 w-60% border-r-blue-600 h-fill bg-blue-600 pl-12 ease-in-out duration-700 ": "fixed left-[-100%] "}>
    //             <img img className="w-28 h-10 my-7"  src={Logo} alt="" /> 
    //             <ul className=" uppercase text-white  font-semibold ">
    //               <li className="mb-3"><Link to="/" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400 ">Home</Link></li>
    //               <li className="mb-3"><Link to="/#service" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400 ">Services</Link></li>
    //               <li className="mb-3"><Link to="/product" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400 ">Products</Link></li>
    //               <li className="mb-3"><Link to="/#aboutus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400 ">About us</Link></li>
    //               <li className="mb-3"><Link to="/#contactus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400 ">Contact us</Link></li>
    //             </ul>
    //           </div>
    //         </div>
    //      </div>
    //    </nav>
    // </div>

    <div className="relative z-50 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <div className="flex items-center flex-shrink-0 ">
        <img img className="w-20 h-12"  src={Logo} alt="" />    
      </div>

      <ul className="hidden md:flex md:ml-14 md:space-x-12 md:text-blue-600 md:cursor-pointer md:font-bold ">
        <li><Link to="/" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Home</Link></li>
        <li><Link to="/#service" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Services</Link></li>
        <li><Link to="/product" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Products</Link></li>
        <li><Link to="/#aboutus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">About us</Link></li>
        <li><Link to="/#contactus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Contact us</Link></li>

      </ul>
      <div className="hidden md:flex md:items-center md:gap-5 md:cursor-pointer ">
        <input className=" rounded-lg px-5 relative "  type="text" placeholder="Search here..." />
        <Link to="/login"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7"  src={Account} alt="" /></Link>
        {/* <Link to="/#contactus"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7" src={Phone} alt="" /></Link> */}
        <Link to="/cart"><img className="w-5 h-5 active:w-7 active:h-7 "  src={Cart} alt="" /></Link>

      </div>
            
            {/* Mobile device */}

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div className={nav ? "fixed left-0 top-0 w-[60%] border-r border-gray-900 h-full ease-in-out duration-700" : "fixed left-[-100%]"}>
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] bg-black p-8">REACT.</h1> */}
        <img img className="w-20 h-12 bg-blue-700 p-8"  src={Logo} alt="" />
        <ul className="uppercase">
          <li><Link to="/" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Home</Link></li>
          <li><Link to="/#service" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Services</Link></li>
          <li><Link to="/product" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Products</Link></li>
          <li><Link to="/#aboutus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">About us</Link></li>
          <li><Link to="/#contactus" className="hover:border-b-4 hover:border-blue-600  active:text-blue-400">Contact us</Link></li>
        </ul>
        <div className="flex flex-col bg-white p-3 rounded-xl">
          <input className=" rounded-lg px-5 relative "  type="text" placeholder="Search here..." />
          <Link to="/login"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7"  src={Account} alt="" /></Link>
          {/* <Link to="/#contactus"><img className="w-5 h-5 active:text-lg active:w-7 active:h-7" src={Phone} alt="" /></Link> */}
          <Link to="/cart"><img className="w-5 h-5 active:w-7 active:h-7 "  src={Cart} alt="" /></Link>
        </div>
      </div>
    </div>

  )
}

export default Navbar



