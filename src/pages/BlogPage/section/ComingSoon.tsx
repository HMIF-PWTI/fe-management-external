import { motion } from "framer-motion";

const text = "Coming Soon";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const ComingSoon = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-[#282828] px-4">
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block text-[#349DC2]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#282828]/60">
          Kami lagi nyiapin sesuatu yang keren. Stay tuned!
        </p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
