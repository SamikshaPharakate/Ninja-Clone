import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaClock } from 'react-icons/fa';
import Button from './Button';
import Modal from './Modal';

const CourseCard = ({ course }) => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleEnroll = () => {
    setShowEnrollModal(true);
  };
  return (
    <>
    <motion.div
      whileHover={{ y: -15, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.span 
          className="absolute top-4 left-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {course.category}
        </motion.span>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-gray-900 mb-2 line-clamp-2"
          animate={{ color: isHovered ? '#3B82F6' : '#111827' }}
          transition={{ duration: 0.3 }}
        >
          {course.title}
        </motion.h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-2" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className="font-semibold">{course.rating}</span>
          </div>
        </div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="primary" className="w-full" onClick={handleEnroll}>
            Enroll Now
          </Button>
        </motion.div>
      </div>
    </motion.div>

    <Modal
      isOpen={showEnrollModal}
      onClose={() => setShowEnrollModal(false)}
      title={`Enroll in ${course.title}`}
    >
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Course Details</h4>
          <p className="text-gray-600">{course.description}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
            <span><strong>Duration:</strong> {course.duration}</span>
            <span><strong>Rating:</strong> {course.rating} ⭐</span>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">What's Included</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✓ Video lectures</li>
            <li>✓ Hands-on projects</li>
            <li>✓ Certificate of completion</li>
            <li>✓ 1-on-1 mentorship</li>
          </ul>
        </div>
        <Button variant="primary" className="w-full" onClick={() => alert('Enrollment successful! (Demo)')}>
          Confirm Enrollment
        </Button>
      </div>
    </Modal>
    </>
  );
};

export default CourseCard;
