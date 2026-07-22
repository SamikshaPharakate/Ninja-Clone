import React from 'react';
import { motion } from 'framer-motion';

const Skeleton = ({ className }) => (
  <motion.div
    className={`bg-gray-200 rounded animate-pulse ${className}`}
    initial={{ opacity: 0.5 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
  />
);

const CourseCardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <Skeleton className="w-full h-48" />
    <div className="p-6">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex justify-between mb-4">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  </div>
);

const TestimonialSkeleton = () => (
  <div className="bg-gray-50 rounded-2xl p-8">
    <Skeleton className="h-8 w-8 mb-4 rounded-full" />
    <div className="flex mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton key={i} className="h-5 w-5 mr-1 rounded" />
      ))}
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-3/4 mb-6" />
    <div className="flex items-center">
      <Skeleton className="h-12 w-12 rounded-full mr-4" />
      <div>
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  </div>
);

export { Skeleton, CourseCardSkeleton, TestimonialSkeleton };
