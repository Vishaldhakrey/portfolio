import { Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', "Tanstack-query"],
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    category: 'DevOps',
    icon: Terminal,
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git'],
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    category: 'Design',
    icon: Palette,
    skills: ['Figma', 'UI/UX', 'Responsive Design'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-indigo-100 dark:bg-indigo-600 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-200" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
