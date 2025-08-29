import { useState } from "react";
import React from "react";
import My from "../../assets/my.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { FiX } from "react-icons/fi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [showMessageToast, setShowMessageToast] = useState(false);
  const [_, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log(formData);
    formData.append("access_key", "74d38d5a-8ae3-4174-88e8-a80ed8592bf6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      handleSendMessage();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000); 
    });
  };

  const handleSendMessage = () => {
    setContactFormOpen(false);
    setShowMessageToast(true);
    setTimeout(() => setShowMessageToast(false), 4000);
  };

  const btns = [
    { label: "projects" },
    { label: "me" },
    { label: "shoot me a text", onClick: openContactForm },
  ];

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
      {/* Copied Toast */}
      {showToast && (
        <motion.div
          className="fixed top-5 left-1/2 -translate-x-1/2 
                     bg-[#FAD6A5] text-black text-sm px-6 py-3 
                     rounded-lg shadow-lg transition-all duration-300"
        >
          Copied!
        </motion.div>
      )}

      {/* Message sent Toast */}
      {showMessageToast && (
        <motion.div
          className="fixed top-5 left-1/2 -translate-x-1/2 
                     bg-[#FAD6A5] text-black text-sm px-6 py-3 
                     rounded-lg shadow-lg transition-all duration-300"
        >
          Message sent!
        </motion.div>
      )}

      {/* Logo and Name */}
      <div className="flex items-center justify-between gap-2">
        <img src={My} alt="broken image" className="h-8 w-7 rounded-full" />
        <p className="text-sm font-medium">Sagar Dabas</p>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => handleCopy("Hi@dabas.dev")}
            className="font-extralight text-sm hover:text-gray-500 transition-all duration-100"
          >
            Hi@dabas.dev
          </button>
          {btns.map((btn, index) => (
            <button
              key={index}
              onClick={btn.onClick}
              className="bg-white text-sm font-normal px-4 py-[2px] rounded-md text-[#1c1b1b] hover:bg-gray-100 transition-all duration-150 shadow-[0_0_10px_rgba(0,0,0,0.9) cursor-pointer"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hamburger Menu */}
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
          {btns.map((btn, index) => (
            <button
              key={index}
              onClick={btn.onClick}
              className="bg-white text-sm font-normal px-4 py-[2px] rounded-md text-[#1c1b1b] hover:bg-gray-100 transition-all duration-150 shadow-[0_0_10px_rgba(0,0,0,0.9) cursor-pointer"
            >
              {btn.label}
            </button>
          ))}
        </motion.div>
      )}

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ dealy: 0.1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="bg-[#e8c48e] rounded-xl shadow-xl w-full max-w-md p-6 "
            >
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#553d3a] ">
                  Get In Touch
                </h1>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={closeContactForm}
                >
                  <FiX className="h-7 w-7" />
                </motion.button>
              </div>

              {/* Input Fields */}
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#553d3a] mb-1 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#553d3a] focus:border-[#553d3a] bg-[#F2E5D9] outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#553d3a] mb-1 "
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#553d3a] focus:border-[#553d3a] bg-[#F2E5D9] outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#553d3a] mb-1 "
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    placeholder="Leave a message"
                    className="w-full h-32 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#553d3a] focus:border-[#553d3a] bg-[#F2E5D9] outline-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#c09061] to-[#e9dbc6] hover:from-[#553d3a] hover:to-[#98694d] hover:text-white transition-all duration-800 rounded-lg shadow-md hover:shadow-white/60"
                >
                  send message
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;