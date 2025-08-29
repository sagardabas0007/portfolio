import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Proj1 from "../../assets/proj-1.png";
import Proj2 from "../../assets/proj-2.png";
import Proj3 from "../../assets/proj-3.png";
import Proj4 from "../../assets/proj-4.png";

const projects = [
  {
    title: "Refer",
    description: "Blockchain-powered collaboration platform connecting influencers and brands, managing partnerships, tracking progress, and ensuring transparency in performance and payments.",
    image: Proj1,
    tags: ["Web3", "Next.js"],
    titleColor: "text-green-700",
  },
  {
    title: "Meowtrades",
    description: "On-chain trading platform empowering crypto traders with advanced strategies, real-time analytics, and seamless execution for smarter trading.",
    image: Proj2,
    tags: ["Web3", "Next.js"],
    titleColor: "text-blue-500",
  },
  {
    title: "Bankwim",
    description: "Crypto web app combining an NFT marketplace with interest-earning features. Store NFTs and Web3 assets while earning interest.",
    image: Proj3,
    tags: ["Web3", "Next.js"],
    titleColor: "text-white",
    textStroke: true, // For white text with black border
  },
  {
    title: "GreenWim",
    description: "Project incentivizing individual contributions to the renewable energy grid, making sustainable energy more accessible and rewarding.",
    image: Proj4,
    tags: ["JavaScript", "Next.js"],
    titleColor: "text-green-700",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col gap-y-7 items-center justify-center my-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="text-6xl text-center font-semibold" variants={containerVariants}>
        What really Matters
      </motion.div>
      <motion.div className="text-center font-light text-sm" variants={containerVariants}>
        A showcase of recent work spanning various industries and design challenges.
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="grid md:grid-cols-2 gap-6 w-full mt-10" variants={containerVariants}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="shadow-[0_0_10px_rgba(0,0,0,0.2)] flex flex-col items-center gap-y-7 px-4 py-4 rounded-lg m-4"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)", transition: { duration: 0.3 } }}
          >
            {/* Image */}
            <motion.div className="w-auto h-auto" variants={cardVariants}>
              <img src={proj.image} alt={proj.title} className="w-full h-auto" />
            </motion.div>

            {/* Content */}
            <motion.div className="flex flex-col gap-y-4 w-full" variants={cardVariants}>
              <motion.h2
                className={`${proj.titleColor} font-semibold text-3xl text-start`}
                style={proj.textStroke ? { WebkitTextStroke: "1px black", textStroke: "1px black" } : {}}
              >
                {proj.title}
              </motion.h2>

              <motion.p className="text-start font-light text-sm">{proj.description}</motion.p>

              <motion.div className="flex items-center gap-4">
                {proj.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="bg-gray-100 text-sm font-normal px-4 py-[2px] rounded-md text-[#1c1b1b] shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.button
                className="w-full group px-4 py-2 rounded-lg text-base font-medium shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-all duration-700 flex items-center justify-center gap-x-2 bg-[#FAD6A5]"
                whileHover={{ scale: 1.02, backgroundColor: "#F9C673" }}
                whileTap={{ scale: 0.98 }}
              >
                View Case study <FaArrowRight className="transform transition-all duration-300 group-hover:-rotate-45" />
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;