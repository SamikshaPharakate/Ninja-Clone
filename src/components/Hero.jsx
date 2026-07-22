import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaClock, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';

const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;
        
        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleJoinClass = () => {
    alert('Joining live class... (Demo)');
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden pt-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl opacity-10"
          />
          <motion.div 
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"
          />
          <motion.div 
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-5"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Live Class Banner */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                className="bg-gradient-to-r from-brand-primary to-brand-primaryDark rounded-xl p-4 mb-6 shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-white font-semibold">Give your career an unfair AI advantage</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <button
                      onClick={handleJoinClass}
                      className="bg-white text-brand-primary px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Explore Courses
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="inline-block px-4 py-2 bg-blue-100 text-brand-primary rounded-full text-sm font-semibold mb-6 cursor-pointer"
              >
                🤖 AI-Infused Curriculum Curated by Experts
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Get the career you
                </motion.span>
                <motion.span 
                  className="text-brand-primary block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  deserve, faster
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                9+ years of delivering outcome-focused upskilling courses in a structured, 
                practice-based format by MAANG faculty, with the fastest 1-on-1 doubt resolution.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/courses">
                    <Button size="lg">
                      Explore Courses
                      <FaArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" size="lg" onClick={() => setShowDemoModal(true)}>
                    <FaPlay className="mr-2" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="mt-12 flex items-center gap-8"
              >
                <motion.div 
                  className="flex -space-x-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <motion.img
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                      whileHover={{ zIndex: 10, scale: 1.2 }}
                      src={[
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop",
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop"
                      ][i-1]}
                      alt={`Student ${i}`}
                      className="w-12 h-12 rounded-full border-3 border-white cursor-pointer"
                    />
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <div className="flex items-center text-yellow-500 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.span
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.9 + star * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.3, rotate: 15 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">4.9/5 from 10,000+ reviews</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10"
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop"
                    alt="Coding"
                    className="rounded-2xl shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </motion.div>
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  className="absolute -left-8 top-20 bg-white p-4 rounded-xl shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Course Completed</p>
                      <p className="text-sm text-gray-500">DSA Fundamentals</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  className="absolute -right-8 bottom-20 bg-white p-4 rounded-xl shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Job Offer</p>
                      <p className="text-sm text-gray-500">₹25 LPA</p>
                    </div>
                  </div>
                </motion.div>

                {/* Live Students Card */}
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  whileHover={{ scale: 1.15 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaUsers className="text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Live Now</p>
                      <p className="text-sm text-gray-500">1,234 students learning</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Video Modal */}
      <Modal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} title="Platform Demo">
        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-center text-white">
            <FaPlay size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-gray-400">Demo video would play here</p>
            <p className="text-sm text-gray-500 mt-2">(Embed YouTube/Vimeo video)</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Watch a quick overview of our platform and see how we help students achieve their career goals.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
