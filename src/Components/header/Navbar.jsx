import React from "react";
import My from "../../assets/my.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  const btns = ["about", "me", "get started"];

  return (
    <motion.div
      initial={{ opacity: 0,y:-100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{
        type:"spring",
        stiffness: 200,
        damping:90,
        delay: 1,
        duration: 0.3,
      }}
      className="flex items-center justify-between px-5 py-2"
    >
      <div className="flex items-center justify-between gap-2">
        <img src={My} alt="broken image" className="h-8 w-7 rounded-full" />
        <p className="text-sm font-medium">Sagar Dabas</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <a
          href="#"
          className=" hidden md:block font-extralight text-sm hover:text-gray-500 transition-all duration-100"
        >
          Hi@dabas.dev
        </a>
        {btns.map((label, index) => (
          <button
            key={index}
            className="bg-white text-sm font-normal px-4 py-[2px] rounded-md text-[#1c1b1b] hover:bg-gray-100 transition-all duration-150 shadow-[0_0_10px_rgba(0,0,0,0.9) cursor-pointer"
          >
            {label}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
