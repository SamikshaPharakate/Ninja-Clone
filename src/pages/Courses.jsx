import React from 'react';
import Navbar from '../components/Navbar';
import CoursesSection from '../components/CoursesSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-32 pb-20 bg-gradient-to-br from-brand-primary to-brand-primaryDark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">All Courses</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our comprehensive curriculum designed by industry experts
          </p>
        </div>
      </motion.div>
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Courses;
