import React, { useContext, useState } from 'react';
import logoname from '../assets/logoname.png';
import profileicon from '../assets/profileicon.png';
import carticon from '../assets/carticon.png';
import { Link,NavLink } from 'react-router-dom';
import { ShopContext } from '../context/shopcontext';


const Navbar = () => {

const {getCartCount} = useContext(ShopContext);

  return (

    <div className="bg-pink-100">
    <div className="flex items-center justify-between py-4 font-medium w-full">
      <img src={logoname} className="w-36 ml-5" alt="Logo" />
  
      <ul className="hidden sm:flex gap-5 text-sm text-pink-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1" activeclassname="active">
          <p>HOME</p>
          <hr className="w-2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
  
        <NavLink to="/collection" className="flex flex-col items-center gap-1" activeclassname="active">
          <p>COLLECTION</p>
          <hr className="w-2 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
  
      <div className="flex items-center gap-6">
  
        <div className="group relative">
         <Link to='/Login'> <img src={profileicon} alt="" className="w-5 cursor-pointer" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-pink-500">My Profile</p>
              <p className="cursor-pointer hover:text-pink-500">Orders</p>
              <p className="cursor-pointer hover:text-pink-500">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
        <img src={carticon} className="w-5 w-min-5 mr-20" alt="" />
        <p className="absolute right-[5px] bottom-[-5px] w-4 text-center leading-4 mr-16 bg-pink-600 text-white aspect-square rounded-full text-[9px]">{getCartCount()}</p>
      </Link>
      </div>
    </div>
  </div>

  )
}

export default Navbar