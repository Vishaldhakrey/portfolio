import { X, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <X className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>

            <div className="aspect-video w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            <div className="p-6 text-gray-900 dark:text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm dark:bg-indigo-600 dark:text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.details && (
                <div className="space-y-6">
                  {project.details.problem && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Problem</h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.details.problem}</p>
                    </div>
                  )}

                  {project.details.solution && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.details.solution}</p>
                    </div>
                  )}

                  {project.details.features && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {project.details.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.details.impact && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Impact</h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.details.impact}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-4 mt-6 pt-6 border-t dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}