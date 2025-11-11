import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-start justify-center overflow-hidden pt-24">
      <ParticleBackground />

      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-indigo-900/40" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-cyan-500/10 dark:from-pink-500/20 dark:via-transparent dark:to-cyan-500/20" />
      <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/5 via-transparent to-teal-500/10 dark:from-orange-500/10 dark:via-transparent dark:to-teal-500/20" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="relative inline-block">
            <motion.div
              className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl gradient-border"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/profile.png"
                alt="Sasi Kanth"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -inset-4 rounded-full gradient-border-animated"
              animate={{ rotate: 360 }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
              }}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
          variants={itemVariants}
        >
          <span className="block gradient-text-enhanced">Sasi Kanth</span>
          <span className="block text-3xl md:text-5xl mt-2">
            <ReactTyped
              strings={[
                'MERN Stack Developer',
                'Python Developer',
                'AI & NLP Enthusiast',
                'Full-Stack Developer',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="gradient-text-animated"
            />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I create <span className="font-semibold gradient-highlight">digital experiences</span> that blend
          cutting-edge technology with elegant design. Specializing in{' '}
          <span className="font-semibold gradient-highlight">web development</span>,{' '}
          <span className="font-semibold gradient-highlight">AI solutions</span>, and{' '}
          <span className="font-semibold gradient-highlight">scalable applications</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="btn-primary-enhanced flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary-enhanced flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            className="btn-download flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="w-4 h-4" />
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
