import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon, HiCode } from 'react-icons/hi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-lg backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <HiCode className="w-5 h-5 text-white" />
            </div>
            <a
              href="#home"
              className="text-2xl font-bold gradient-text-enhanced font-poppins"
            >
              Sasi Kanth
            </a>
          </motion.div>

          {/* Enhanced Desktop Menu with Fade Hover Effects */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-500 ease-in-out overflow-hidden group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {/* Fade overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-400/30 dark:to-pink-400/30 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { 
                        duration: 0.4,
                        ease: "easeInOut"
                      }
                    }}
                  />
                  
                  {/* Text with color fade effect */}
                  <motion.span
                    className="relative z-10"
                    whileHover={{
                      color: darkMode ? "#c084fc" : "#8b5cf6",
                      transition: { 
                        duration: 0.4,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Bottom border with fade animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ 
                      width: "100%",
                      transition: { 
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enhanced Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Theme Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-12 h-12 rounded-full overflow-hidden glass-effect"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-yellow-400 to-orange-400' : 'from-purple-600 to-blue-600'} opacity-20 transition-opacity duration-500`}></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                {darkMode ? (
                  <HiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <HiMoon className="w-5 h-5 text-purple-600" />
                )}
              </div>
            </motion.button>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 rounded-full overflow-hidden glass-effect"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  {isOpen ? (
                    <HiX className="w-6 h-6" />
                  ) : (
                    <HiMenu className="w-6 h-6" />
                  )}
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu with Fade Hover Effects */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden glass-effect rounded-xl mt-2 py-4 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-3 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-500 ease-in-out overflow-hidden group block"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    {/* Fade overlay effect for mobile */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-400/30 dark:to-pink-400/30 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { 
                          duration: 0.4,
                          ease: "easeInOut"
                        }
                      }}
                    />
                    
                    {/* Text with color fade effect for mobile */}
                    <motion.span
                      className="relative z-10 block"
                      whileHover={{
                        color: darkMode ? "#c084fc" : "#8b5cf6",
                        transition: { 
                          duration: 0.4,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Right border with fade animation for mobile */}
                    <motion.div
                      className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-lg"
                      initial={{ scaleY: 0 }}
                      whileHover={{ 
                        scaleY: 1,
                        transition: { 
                          duration: 0.5,
                          ease: "easeInOut"
                        }
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;