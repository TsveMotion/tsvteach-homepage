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
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            🎓 Beta Testing Phase
          </div>
          <h2 className="text-gray-800 font-semibold text-lg md:text-xl mb-2">
            Early beta testers from top UK universities
          </h2>
          <p className="text-gray-600 text-sm md:text-base px-4">
            Join students already testing our AI-powered learning platform
          </p>
        </motion.div>

        {/* University Logo Grid */}
        <motion.div 
          className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 items-center"
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

        {/* Beta Stats Row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">Beta</div>
            <div className="text-gray-600 text-sm md:text-base">Testing phase</div>
            <div className="text-xs text-gray-500 mt-1">Pre-launch validation</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">8</div>
            <div className="text-gray-600 text-sm md:text-base">Universities</div>
            <div className="text-xs text-gray-500 mt-1">Early testers from</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">AI</div>
            <div className="text-gray-600 text-sm md:text-base">Powered learning</div>
            <div className="text-xs text-gray-500 mt-1">Smart study assistant</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
