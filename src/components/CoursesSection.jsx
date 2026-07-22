import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import CourseCard from './CourseCard';
import Button from './Button';

const CoursesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-relevant curriculum designed by experts to help you master in-demand skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
