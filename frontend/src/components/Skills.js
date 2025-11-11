import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../utils/constants';
import { FaCode, FaDatabase, FaRobot, FaTools, FaLightbulb, FaRocket, FaStar } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: FaCode, color: 'from-purple-500 to-pink-500' },
    { id: 'frontend', name: 'Frontend', icon: FaCode, color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend', icon: FaDatabase, color: 'from-green-500 to-teal-500' },
    { id: 'ai', name: 'AI & ML', icon: FaRobot, color: 'from-orange-500 to-red-500' },
    { id: 'tools', name: 'Tools', icon: FaTools, color: 'from-indigo-500 to-purple-500' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 font-poppins"
            variants={itemVariants}
          >
            My <span className="gradient-text-enhanced">Skills</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group ${activeCategory === category.id
                ? 'text-white shadow-lg'
                : 'text-gray-700 dark:text-gray-300'
                }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} ${activeCategory === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`} />
              <span className="relative z-10 flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => {
            // Find the category color for this skill
            const categoryColor = categories.find(c => c.id === skill.category)?.color || 'from-purple-500 to-pink-500';

            return (
              <motion.div
                key={skill.name}
                className="p-6 glass-effect rounded-xl relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                custom={index}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${categoryColor} font-bold text-sm`}>
                      {skill.level}%
                    </span>
                    {skill.level >= 90 && <FaStar className="w-4 h-4 text-yellow-500" />}
                  </div>
                </div>

                <div className="skill-bar mb-2 relative">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${categoryColor} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-5" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                  <FaLightbulb className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 font-poppins gradient-text-enhanced">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm constantly exploring new technologies and frameworks. Currently diving deeper into:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Vector Databases', 'Cloud AI'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.5 + index * 0.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;