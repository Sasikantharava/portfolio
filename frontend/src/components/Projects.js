// Enhanced Projects Component
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../utils/constants';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaRocket, FaStar, FaLayerGroup, FaExpand } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', color: 'from-purple-500 to-pink-500' },
    { id: 'fullstack', name: 'Full Stack', color: 'from-blue-500 to-cyan-500' },
    { id: 'frontend', name: 'Frontend', color: 'from-green-500 to-teal-500' },
    { id: 'ai', name: 'AI & ML', color: 'from-orange-500 to-red-500' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 25 }
    },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-700/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-700/20 rounded-full filter blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div className="flex justify-center mb-4" variants={itemVariants}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
              <FaLayerGroup className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 font-poppins"
            variants={itemVariants}
          >
            My <span className="gradient-text-enhanced">Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                filter === category.id
                  ? 'text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} ${filter === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`} />
              <span className="relative z-10">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={filter}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Find the category color for this project
              const categoryColor = categories.find(c => c.id === project.category)?.color || 'from-purple-500 to-pink-500';
              
              return (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                  variants={itemVariants}
                  layout
                  whileHover={{ 
                    y: -15,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Multiple layered hover effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl z-10`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10" />
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl z-0`} />
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay with view details button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <motion.div
                        className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full p-4 text-gray-800 dark:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExpand className="w-6 h-6" />
                      </motion.div>
                    </div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full flex items-center gap-1 z-20"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <FaStar className="w-3 h-3" />
                        Featured
                      </motion.div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 bg-white dark:bg-dark-400 relative z-10">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${categoryColor} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium group-hover:bg-opacity-20 transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex justify-between items-center">
                      <motion.a
                        href={project.githubLink}
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ${categoryColor} transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ${categoryColor} transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-dark-400 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header with gradient overlay */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${categories.find(c => c.id === selectedProject.category)?.color || 'from-purple-500 to-pink-500'} opacity-70 rounded-t-2xl`} />
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                  
                  {/* Featured badge in modal */}
                  {selectedProject.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                      <FaStar className="w-4 h-4" />
                      Featured Project
                    </div>
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.longDescription}
                  </p>

                  {/* Enhanced Features */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <FaRocket className="w-5 h-5 text-primary-500" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className={`px-4 py-2 bg-gradient-to-r ${categories.find(c => c.id === selectedProject.category)?.color || 'from-purple-500 to-pink-500'} text-white rounded-full text-sm font-medium`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.githubLink}
                      className="btn-primary-enhanced flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={selectedProject.liveLink}
                      className="btn-secondary-enhanced flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;