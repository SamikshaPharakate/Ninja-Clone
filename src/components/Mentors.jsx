import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { mentors } from '../data/mentors';

const Mentors = () => {
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
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our mentors bring years of experience from top tech companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {mentor.name}
              </h3>
              <p className="text-brand-primary font-semibold mb-1">
                {mentor.position}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {mentor.experience} experience
              </p>
              
              <div className="flex justify-center space-x-4">
                <a
                  href={mentor.social.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={mentor.social.twitter}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={mentor.social.github}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
