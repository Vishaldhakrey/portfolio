import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/vishal.png" 
              alt="Vishal Dhakrey"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6 text-gray-900 dark:text-white" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600 dark:text-gray-300" variants={fadeInUp}>
              Hi, I'm Vishal Dhakrey, a passionate Full Stack Developer and Computer Science enthusiast. I am currently pursuing my B.Tech in Computer Science Engineering from Dronacharya College of Engineering, expected to graduate in 2025. I specialize in full-stack web development, utilizing technologies like JavaScript, ReactJS, Node.js, MongoDB, Express, and Tailwind CSS.
            </motion.p>

            <motion.p className="text-lg text-gray-600 dark:text-gray-300" variants={fadeInUp}>
              With a strong foundation in both frontend and backend development, I build scalable, efficient, and user-centric web applications. I enjoy solving complex problems and have developed numerous projects that showcase my ability to apply technical knowledge to real-world challenges.
            </motion.p>

            <motion.p className="text-lg text-gray-600 dark:text-gray-300" variants={fadeInUp}>
              In addition to development, I am an avid problem solver on LeetCode, where I have solved over 150 problems. I am also passionate about mentoring aspiring developers, sharing knowledge, and continuously improving my skills through real-world projects.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
