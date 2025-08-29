import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "Web3",
    "System Design",
    "Prototyping",
    "Brand Identity",
  ];

  // Light beige/pastel color palette
  const skillColors = [
    "#f5f5dc", // Beige
    "#fbeed8", // Light cream
    "#f3e5ab", // Soft yellow
    "#ffe5b4", // Peach
    "#f0e6d2", // Ivory
    "#f9f0d9", // Light sand
    "#fdebd0", // Pastel apricot
    "#fff1e0", // Very light peach
    "#fdf5e6", // Old lace
    "#faebd7", // Antique white
    "#fff5e6", // Pale beige
    "#fef9e7", // Light pastel yellow
  ];

  // Refs for tracking scroll position
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);

  // Hook to detect when elements are in view
  const titleInView = useInView(titleRef, { once: true, threshold: 0.3 });
  const textInView = useInView(textRef, { once: true, threshold: 0.3 });
  const skillsInView = useInView(skillsRef, { once: true, threshold: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <div className="mx-4 py-4 overflow-hidden">
      <div className="flex flex-col w-full h-auto gap-y-7">
        {/* Animated Title */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-5xl font-semibold"
        >
          Crafting experiences that matter
        </motion.div>

        {/* Animated Text Content */}
        <motion.div ref={textRef} className="flex flex-col gap-y-3">
          <motion.p
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={textReveal}
            className="font-light text-md leading-relaxed"
          >
            I am a web developer specializing in designing and building
            user-centered digital experiences that seamlessly bridge the gap
            between business objectives and user needs. My approach integrates
            strategic thinking with meticulous attention to detail, ensuring
            that every interface is not only visually compelling but also
            intuitive, efficient, and purpose-driven. I focus on creating
            solutions that are both functional and aesthetically coherent,
            making sure that every interaction feels natural and every component
            contributes meaningfully to the overall experience. Throughout my
            career, I have collaborated with startups, helping them transform
            their digital presence, optimize their engagement, and achieve
            measurable outcomes.
          </motion.p>
        </motion.div>

        {/* Animated Skills Grid */}
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-wrap gap-3 mt-4"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillItem}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg text-sm font-light cursor-pointer transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.9)] transform-gpu"
              style={{
                perspective: "1000px",
                backgroundColor: skillColors[index % skillColors.length],
                color: "#4b3f36",
              }}
            >
              <motion.span
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                {skill}
              </motion.span>
            </motion.span>
          ))}
        </motion.div>

        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 blur-xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-25 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 blur-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;