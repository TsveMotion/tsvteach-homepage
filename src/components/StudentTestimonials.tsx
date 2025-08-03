'use client';

import { motion } from 'framer-motion';

export default function StudentTestimonials() {
  const testimonials = [
    {
      quote: "I wish I had this when I was in school",
      author: "Nasim Uddin",
      role: "Architecture, Independent",
      avatar: "N"
    },
    {
      quote: "TsvTeach is awesome, just used it to learn from a biotech roundtable discussion!",
      author: "Rohan Robinson", 
      role: "Software Engineer, Independent",
      avatar: "R"
    },
    {
      quote: "This TsvTeach site, with features like 'Chat with PDF,' has become an integral part of our daily workflow. It's streamlined our process of understanding videos and PDFs.",
      author: "Jason Patel",
      role: "Writer",
      avatar: "J"
    },
    {
      quote: "I use TsvTeach on a daily basis now. It's streamlined my processes and improved how I learn materials.",
      author: "Katie Doe",
      role: "Content Manager",
      avatar: "K"
    },
    {
      quote: "I love this tool, like the YouTube video summarizer! I use it to learn concepts ranging from Econ to Quantum Mechanics, and it makes learning so much easier and more effective.",
      author: "Mike Wazowski",
      role: "Product Engineer, Web3",
      avatar: "M"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Built for any use case
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on a learning content below, and start your learning journey →
          </p>
        </motion.div>

        {/* Content Examples Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Biology Example */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <div className="text-4xl">🧬</div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">The Genetic Code and Translation</h3>
              <p className="text-gray-600 text-sm">DNA translates to protein sequences.</p>
            </div>
          </div>

          {/* Psychology Example */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-4xl">🧠</div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Introduction to the Human Brain</h3>
              <p className="text-gray-600 text-sm">MIT 9.13 The Human Brain, Spring 2019</p>
            </div>
          </div>

          {/* Cognitive Psychology Example */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <div className="text-4xl">💭</div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Cognitive Psychology: An Intro</h3>
              <p className="text-gray-600 text-sm">Mind's mechanisms scientifically explored.</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-black">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
