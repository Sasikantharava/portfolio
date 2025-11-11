import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiSparkles } from 'react-icons/hi';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 flex items-center justify-center z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-700/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-700/20 rounded-full filter blur-3xl" />
      </div>
      
      <motion.div
        className="flex flex-col items-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity }
            }}
          >
            <HiCode className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 border-b-blue-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <motion.div className="flex items-center gap-2 mt-6">
          <motion.p
            className="text-xl font-semibold gradient-text-enhanced"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Loading
          </motion.p>
          <motion.div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-4 flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HiSparkles className="w-4 h-4 text-purple-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Creating amazing experiences...</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;