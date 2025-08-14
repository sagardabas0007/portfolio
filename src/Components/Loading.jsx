import { motion } from "framer-motion";

const Loading = ({ onFinish }) => {
  const name = "SAGAR DABAS".split("");
  const letterVariants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onFinish}
      className="bg-black h-screen fixed inset-0 flex justify-center items-center z-50"
    >
      <div className="flex flex-col items-center">
        {/* Name */}
        <motion.h1
          className="text-white tracking-widest text-3xl font-michroma flex"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.05 }}
        >
          {name.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* the shiny dots */}
        <div className="flex items-center space-x-5 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1.2 }}
            className="w-6 h-6 rounded-full bg-white border-4 border-white glow-dot"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="w-5 h-5 rounded-full bg-white border-4 border-white glow-dot"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="w-4 h-4 rounded-full bg-white border-4 border-white glow-dot "
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="w-3 h-3 rounded-full bg-white border-4 border-white glow-dot"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="w-2 h-2 rounded-full bg-white border-4 border-white glow-dot "
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="w-3 h-3 rounded-full bg-white border-4 border-white glow-dot"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="w-4 h-4 rounded-full bg-white border-4 border-white glow-dot"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="w-5 h-5 rounded-full bg-white border-4 border-white glow-dot"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1.2 }}
            className="w-6 h-6 rounded-full bg-white border-4 border-white glow-dot"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Loading;