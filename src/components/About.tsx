import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="aspect-square rounded-full overflow-hidden shadow-lg"
            variants={fadeInUp}
            whileHover={{
              scale: 1.05, // Slight zoom effect
              rotate: 2,   // Small rotation
              transition: { duration: 0.5 }, // Smooth transition
            }}
          >
            <motion.img
              src="/vishal.jpg"
              alt="Vishal Dhakrey"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }} // Gradual zoom-in effect
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse", // Creates a back-and-forth zoom
              }}
            />
          </motion.div>
          {/* Text Content */}
          <motion.div
            className="space-y-6 text-gray-700 dark:text-gray-300"
            variants={staggerContainer}
          >
            <motion.p className="text-lg leading-relaxed" variants={fadeInUp}>
              Hello, I'm{" "}
              <strong className="text-gray-900 dark:text-white">
                Vishal Dhakrey
              </strong>
              , a dedicated Full Stack Developer with a passion for creating
              meaningful digital experiences. As a Computer Science Engineering
              student graduating in 2025, I strive to design solutions that are
              innovative, user-focused, and impactful.
            </motion.p>

            <motion.p className="text-lg leading-relaxed" variants={fadeInUp}>
              My approach to development emphasizes delivering seamless,
              efficient, and visually appealing applications. I enjoy tackling
              challenges that require creative problem-solving, detailed
              planning, and collaboration, ensuring that every project achieves
              the highest quality.
            </motion.p>

            <motion.p className="text-lg leading-relaxed" variants={fadeInUp}>
              Apart from development, I am an advocate for continuous learning
              and enjoy mentoring others in their tech journeys. Whether
              collaborating on a team project or solving complex problems, I am
              motivated by the opportunity to contribute to innovation and
              growth in the digital space.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
