import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#edf2f7] via-[#d3dce6] to-[#a2b2c7] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#2d3748] text-gray-800 dark:text-white relative"
    >
      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 py-32 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-8">
          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100"
            variants={fadeInUp}
          >
            <motion.span variants={fadeInUp} className="block">
              Unlocking Creativity
            </motion.span>
            <motion.span
              variants={fadeInUp}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500"
            >
              Through Technology
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            As a Full Stack Developer, I combine creativity with technology to build seamless solutions for real-world problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={fadeInUp}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
            {/* Download Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1K0BMjkyNW32zLrtQrfnkZn-yJmW1YQx7/view"  // Update this with the actual path to your resume
              download
              className="px-8 py-3 rounded-md border-2 border-gray-300 text-gray-800 hover:bg-gray-200 transition-all duration-300 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown className="w-8 h-8 text-gray-800 opacity-70 dark:text-white opacity-60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
