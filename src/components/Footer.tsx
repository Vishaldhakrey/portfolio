import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-white dark:text-gray-300">Vishal Dhakrey</h3>
            <p className="text-gray-400 dark:text-gray-500">Building digital experiences</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Vishaldhakrey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishaldhakrey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/VishalDhakrey3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:vishaldhakrey57@gmail.com"
              className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-600 text-center text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Vishal Dhakrey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
