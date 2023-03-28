import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className="text-white flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">V C E .</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>


        <div onClick={handleNav} className="md:hidden">
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
          {console.log(nav)}
        
        </div>
   

      <div className={!nav ? "fixed left-[-100%]" : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" }>
        <h1 className="w-full m-8 text-3xl font-bold text-[#00df9a] cursor-pointer">V C E .</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li> 
          <li className="p-4 border-b border-gray-600 cursor-pointer">Company</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Resources</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
