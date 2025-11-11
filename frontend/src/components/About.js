import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRobot, FaDatabase, FaGraduationCap, FaLaptopCode, FaBrain, FaServer, FaPalette } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  const stats = [
    { icon: FaCode, number: '5+', text: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
    { icon: FaRobot, number: '3+', text: 'AI Projects', color: 'from-blue-500 to-cyan-500' },
    { icon: FaDatabase, number: '2+', text: 'Years Experience', color: 'from-green-500 to-teal-500' },
    { icon: FaGraduationCap, number: '10+', text: 'Technologies', color: 'from-orange-500 to-red-500' }
  ];

  const skills = [
    { skill: 'Frontend Development', level: 90, icon: FaPalette, color: 'from-purple-500 to-pink-500' },
    { skill: 'Backend Development', level: 85, icon: FaServer, color: 'from-blue-500 to-cyan-500' },
    { skill: 'Database Design', level: 80, icon: FaDatabase, color: 'from-green-500 to-teal-500' },
    { skill: 'AI & ML', level: 75, icon: FaBrain, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
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
            About <span className="gradient-text-enhanced">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 font-poppins gradient-text-enhanced"
              variants={itemVariants}
            >
              Passionate Developer & AI Enthusiast
            </motion.h3>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Hello! I'm <span className="font-semibold gradient-highlight">Sasi Kanth</span>, 
              a passionate full-stack developer with expertise in the MERN stack and Python. I love creating 
              digital solutions that solve real-world problems.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              My journey in web development started 2+ years ago, and since then I've been constantly 
              learning and exploring new technologies. Currently, I'm diving deep into 
              <span className="font-semibold gradient-highlight"> AI, NLP, and Large Language Models</span> to build 
              intelligent applications.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source 
              projects, or learning about the latest advancements in artificial intelligence.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 glass-effect rounded-xl relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-xl relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {item.skill}
                    </span>
                  </div>
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-bold`}>
                    {item.level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Additional skill card */}
            <motion.div
              className="col-span-2 p-6 glass-effect rounded-xl relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                    <FaLaptopCode className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Full-Stack Development
                  </span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 font-bold">
                  88%
                </span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  initial={{ width: 0 }}
                  animate={inView ? { width: '88%' } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;