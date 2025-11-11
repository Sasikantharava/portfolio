import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../utils/constants';
import { FaArrowRight, FaCheck, FaRocket, FaLightbulb, FaStar } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
              <FaLightbulb className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 font-poppins"
            variants={itemVariants}
          >
            What I <span className="gradient-text-enhanced">Do</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I offer comprehensive development services to bring your ideas to life with cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid with Advanced Hover Effects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 glass-effect rounded-2xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Animated gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Animated border that appears on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl" />
                <div className="absolute inset-0 rounded-2xl border border-purple-500/20 dark:border-purple-400/20" />
              </div>
              
              {/* Glow effect that appears on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
              
              {/* Service Icon with Enhanced Hover Effects */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center text-white text-3xl shadow-lg relative z-10"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {service.icon}
                
                {/* Rotating ring around the icon */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                />
              </motion.div>

              {/* Service Title with Enhanced Hover Effects */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 relative z-10">
                <span className="inline-block transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500">
                  {service.title}
                </span>
              </h3>

              {/* Service Description with Enhanced Hover Effects */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                {service.description}
              </p>

              {/* Enhanced Features List with Hover Effects */}
              <ul className="space-y-3 mb-6 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)"
                      }}
                    >
                      <FaCheck className="w-3 h-3 text-white" />
                    </motion.div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Enhanced CTA Button with Advanced Hover Effects */}
              <motion.button
                className="relative flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 z-10"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                
                {/* Button background that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
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
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-poppins gradient-text-enhanced">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Let's work together to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary-enhanced inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <FaArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;