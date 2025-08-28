import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  const text = "I'm a developer crafting thoughtful digital solutions";
  const words = text.split(" "); // split into words

  // Parent container with stagger
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // stagger each word by 0.2s
      },
    },
  };

  // Individual word animation
  const wordAnimation = {
    hidden: { y: 50, opacity: 0, scale: 1.7 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 12 },
    },
  };

  return (
    <div className="bg-white h-auto w-auto mx-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg flex flex-col justify-center items-center gap-y-7 pt-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping:90,
          delay: 2,
          duration: 0.3,
        }}
        className="flex items-center justify-between gap-2"
      >
        <div className="bg-teal-400 h-2 w-2 rounded-full animate-pulse"></div>
        <div className="font-light text-sm">Available for new projects</div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center text-6xl md:text-7xl lg:text-8xl font-[550] flex flex-wrap justify-center gap-x-3"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordAnimation}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.3,
        }}
        className="text-center font-light text-sm"
      >
        I blend strategic thinking with intuitive design to create user
        <br />
        -centered digital journeys that deliver results.
      </motion.div>

      {/* hire button and socials */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.3,
        }}
        className="flex justify-between items-center gap-3"
      >
        <a href="#">
          <button className="bg-[#FAD6A5] px-4 py-2 rounded-lg text-base font-medium shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-all duration-700">
            let's connect
          </button>
        </a>
        <a href="https://www.instagram.com/dabas.sagar_0007/">
          <FaInstagram className="h-5 w-5" />
        </a>
        <a href="https://x.com/sagar_dbs?s=21">
          <FaXTwitter className="h-5 w-5" />
        </a>
        <a href="https://github.com/sagardabas0007">
          <FaGithub className="h-5 w-5" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.3,
        }}
      >
        <hr class=" border-gray-300 w-[600px] mt-7" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.3,
        }}
        className=""
      >
        <div className="text-center font-light text-sm">
          "Sagar transformed our digital presence with his
          <br /> thoughtful, results-driven approach to design."
        </div>
        <div className="flex items-baseline justify-end gap-2 text-green-700 animate-bounce">
          <span>-</span>
          <a href="https://www.ref3r.com/" className="pt-4 text-md font-medium">
            ref3r.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
