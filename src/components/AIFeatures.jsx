import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaChartLine, FaUsers, FaCertificate, FaLaptopCode } from 'react-icons/fa';

const AIFeatures = () => {
  const features = [
    {
      icon: <FaRobot className="text-3xl" />,
      title: "AI-Infused Curriculum",
      description: "The right AI tools integrated into your curriculum for enhanced learning",
      gradient: "from-brand-primary to-brand-primaryDark"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Instant Doubt Support",
      description: "Get instant doubt resolution with AI-powered assistance",
      gradient: "from-brand-primary to-purple-500"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Interview Prep with AI",
      description: "AI-powered interview preparation to help you crack MAANG interviews",
      gradient: "from-brand-primary to-teal-500"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "10X Club Community",
      description: "Access premium student community with weekly CXO talks",
      gradient: "from-brand-primary to-pink-500"
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Industry-Recognized Certification",
      description: "Get certified credentials recognized by top companies",
      gradient: "from-brand-primary to-yellow-500"
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Real-World Projects",
      description: "Build portfolio-worthy projects with AI-assisted development",
      gradient: "from-brand-primary to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">Coding Ninjas</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Step into the next generation of learning with AI-powered education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <motion.div 
                className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
