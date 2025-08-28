import { useState } from "react";
import React from "react";
import My from "../../assets/my.jpg";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const btns = ["projects", "me", "get started"];
  const [isOpen, setIsOpen] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // hide after 2s
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 90,
        delay: 1,
        duration: 0.3,
      }}
      className="flex items-center justify-between px-5 py-2"
    >
      {/* Toast */}
      {showToast && (
        <div
          className="fixed top-5 left-1/2 -translate-x-1/2 
                     bg-[#FAD6A5] text-black text-sm px-6 py-3 
                     rounded-lg shadow-lg transition-all duration-300"
        >
          Copied!
        </div>
      )}
      <div className="flex items-center justify-between gap-2">
        <img src={My} alt="broken image" className="h-8 w-7 rounded-full" />
        <p className="text-sm font-medium">Sagar Dabas</p>
      </div>

      {/* this is the normal navbar */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => handleCopy("Hi@dabas.dev")}
            className="font-extralight text-sm hover:text-gray-500 transition-all duration-100"
          >
            Hi@dabas.dev
          </button>
          {btns.map((label, index) => (
            <button
              key={index}
              className="bg-white text-sm font-normal px-4 py-[2px] rounded-md text-[#1c1b1b] hover:bg-gray-100 transition-all duration-150 shadow-[0_0_10px_rgba(0,0,0,0.9) cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Hambergur menue */}
      <div className="block md:hidden">
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 2,
            duration: 0.5,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl"
        >
          {isOpen ? <RxCross1 /> : <CiMenuFries />}
        </motion.button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="absolute top-12 right-5 bg-white shadow-lg rounded-md flex flex-col items-start p-4 gap-3 md:hidden"
        >
          <button
            onClick={() => handleCopy("Hi@dabas.dev")}
            className="text-sm font-extralight hover:text-gray-500"
          >
            Hi@dabas.dev
          </button>
          {btns.map((label, index) => (
            <button
              key={index}
              className="bg-gray-100 w-full text-left text-sm font-normal px-4 py-2 rounded-md text-[#1c1b1b] hover:bg-gray-200 transition-all duration-150"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
