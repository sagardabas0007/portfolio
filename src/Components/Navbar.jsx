import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    
    const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Let's Connect", href: "#contact" },
];

  return (
    <header className="relative z-50 transition-all w-full bg-black">
      <nav className=" hidden  md:flex items-center justify-between px-32 py-2 ">
        {navLinks.map((link, index) => (
            <motion.a
                key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 2 + index * 0.2,
            }}
            href={link.href}
            className=" relative group text-lg font-md text-gray-200 hover:text-violet-300"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </nav>

      {/* hambergur menue */}
      <div className="md:hidden flex justify-end">
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="text-gray-300 py-2"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FiX className="h-7 w-7" />
          ) : (
            <FiMenu className="h-7 w-7" />
          )}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-full right-0 md:hidden shadow-lg px-4 py-5 space-y-5 bg-black opacity-80"
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map(
              (link) => (
                <a
                  onClick={toggleMenu}
                  className="text-gray-300 font-medium py-2"
                        href={link.href}
                  key={link}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
