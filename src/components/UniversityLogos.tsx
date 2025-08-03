'use client';

import { motion } from 'framer-motion';

export default function UniversityLogos() {
  const universities = [
    { name: "Oxford University", color: "bg-blue-600" },
    { name: "Cambridge University", color: "bg-red-600" },
    { name: "Imperial College", color: "bg-purple-600" },
    { name: "University College London", color: "bg-green-600" },
    { name: "King's College London", color: "bg-orange-600" },
    { name: "Edinburgh University", color: "bg-indigo-600" },
    { name: "Manchester University", color: "bg-teal-600" },
    { name: "Bristol University", color: "bg-pink-600" }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-600 font-medium text-lg mb-8">
            Trusted by top students all over the world
          </h2>
        </motion.div>

        {/* University Logo Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group cursor-pointer">
                <div className={`w-12 h-12 ${university.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                  <span className="text-white font-bold text-lg">
                    {university.name.charAt(0)}
                  </span>
                </div>
                <div className="text-xs text-gray-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {university.name.split(' ')[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="text-3xl font-bold text-black">1M+</div>
            <div className="text-gray-600">Active learners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black">95%</div>
            <div className="text-gray-600">Grade improvement rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black">24/7</div>
            <div className="text-gray-600">AI support available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
