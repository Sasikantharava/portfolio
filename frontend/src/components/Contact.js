import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUser, FaCommentDots } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Backend API base URL
  const API_BASE_URL = 'https://portfolio-tgfq.onrender.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Sending contact form data:', formData);
      
      const response = await axios.post(`${API_BASE_URL}/api/contact`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 15000,
        withCredentials: false
      });
      
      console.log('Response received:', response.data);
      
      if (response.data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error details:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText,
        headers: error.response?.headers
      });
      
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error.response) {
        // Server responded with error status
        if (error.response.status === 400) {
          // Validation error from backend
          if (error.response.data && error.response.data.errors) {
            const validationErrors = error.response.data.errors.map(err => err.msg).join(', ');
            errorMessage = `Validation error: ${validationErrors}`;
          } else {
            errorMessage = error.response.data?.message || 'Invalid data submitted. Please check your inputs.';
          }
        } else if (error.response.status === 429) {
          errorMessage = 'Too many requests. Please try again later.';
        } else if (error.response.status === 413) {
          errorMessage = 'Message too large. Please shorten your message.';
        } else {
          errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
        }
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection and try again.';
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your connection.';
      } else if (error.message.includes('Network Error')) {
        errorMessage = 'Network error. Please check your internet connection.';
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component remains the same...
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

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'India',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 6361429359',
      link: 'tel:+916361429359',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'sasikanth56789@gmail.com',
      link: 'mailto:sasikanth56789@gmail.com',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 font-poppins"
            variants={itemVariants}
          >
            Get In <span className="gradient-text-enhanced">Touch</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-800 dark:text-white mb-8 font-poppins gradient-text-enhanced"
              variants={itemVariants}
            >
              Let's Talk
            </motion.h3>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              I'm always interested in hearing about new projects and opportunities. 
              Whether you need a website, an AI solution, or just want to say hello, 
              I'll get back to you as soon as possible.
            </motion.p>

            {/* Enhanced Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                  
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-white flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <info.icon className="w-5 h-5" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Availability */}
            <motion.div
              className="mt-8 p-6 glass-effect rounded-xl relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-5" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                  <FaClock className="w-5 h-5" />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Availability
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Feel free to reach out!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl -z-10" />
            
            <form onSubmit={handleSubmit} className="space-y-6 p-8 glass-effect rounded-2xl">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaUser className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="2"
                  maxLength="50"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-dark-400 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaEnvelope className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-dark-400 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FaCommentDots className="w-4 h-4" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength="10"
                  maxLength="1000"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-dark-400 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                <div className="text-xs text-gray-500 mt-1">
                  Minimum 10 characters, maximum 1000 characters
                </div>
              </motion.div>

              {/* Enhanced Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                variants={itemVariants}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Enhanced Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center flex items-center justify-center gap-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;