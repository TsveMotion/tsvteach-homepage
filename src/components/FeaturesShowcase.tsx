'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "📄",
      title: "Summary, flashcards, quizzes, voice mode, and more",
      description: "Understand the key points, test your knowledge, get answers with references, and talk with an AI tutor.",
      preview: {
        type: "summary",
        content: {
          title: "Biology: Cell Structure",
          points: [
            "Cell membrane controls what enters and exits the cell",
            "Nucleus contains genetic material (DNA)",
            "Mitochondria are the powerhouses of the cell",
            "Ribosomes synthesize proteins"
          ]
        }
      }
    },
    {
      icon: "💬", 
      title: "Upload any content",
      description: "From PDFs and YouTube videos to slides and even recorded lectures, learn everything your way.",
      preview: {
        type: "upload",
        content: {
          formats: ["PDF", "YouTube", "PowerPoint", "Audio Recording"],
          example: "Upload your chemistry textbook chapter..."
        }
      }
    },
    {
      icon: "🧠",
      title: "Test your knowledge", 
      description: "Create personalized exams, get answer breakdowns, and track your progress.",
      preview: {
        type: "quiz",
        content: {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Cell membrane"],
          correct: 1
        }
      }
    },
    {
      icon: "🎤",
      title: "Talk with an AI Tutor",
      description: "Talk to an AI tutor to amplify ideas and receive guidance on the content.",
      preview: {
        type: "chat",
        content: {
          messages: [
            { type: "user", text: "Can you explain photosynthesis?" },
            { type: "ai", text: "Photosynthesis is the process where plants convert sunlight into energy. Let me break it down for you..." }
          ]
        }
      }
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Save hours, learn smarter.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From key takeaways to specific questions, we've got you covered.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-gray-50 border-2 border-black shadow-lg' 
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Preview */}
          <motion.div 
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Dynamic Content Based on Active Feature */}
              <motion.div 
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {features[activeFeature].preview.type === 'summary' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-400">
                      📝 Study Summary
                    </h4>
                    <h5 className="font-medium">
                      {features[activeFeature].preview.content.title}
                    </h5>
                    <ul className="space-y-2">
                      {features[activeFeature]?.preview?.content?.points?.map((point: string, i: number) => (
                        <li key={i} className="text-gray-300 text-sm">• {point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {features[activeFeature].preview.type === 'upload' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-400">
                      📤 Upload Content
                    </h4>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                      <div className="text-gray-400 mb-2">Drag & drop or click to upload</div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {features[activeFeature]?.preview?.content?.formats?.map((format: string, i: number) => (
                          <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {features[activeFeature].preview.type === 'quiz' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-400">
                      🎯 Practice Quiz
                    </h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <p className="mb-4">{features[activeFeature].preview.content.question}</p>
                      <div className="space-y-2">
                        {features[activeFeature]?.preview?.content?.options?.map((option: string, i: number) => (
                          <div 
                            key={i} 
                            className={`p-2 rounded cursor-pointer transition-colors ${
                              i === features[activeFeature].preview.content.correct 
                                ? 'bg-green-600' 
                                : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                          >
                            {String.fromCharCode(65 + i)}. {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {features[activeFeature].preview.type === 'chat' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-orange-400">
                      💬 AI Tutor Chat
                    </h4>
                    <div className="space-y-3">
                      {features[activeFeature]?.preview?.content?.messages?.map((message: { type: string; text: string }, i: number) => (
                        <div 
                          key={i} 
                          className={`p-3 rounded-lg ${
                            message.type === 'user' 
                              ? 'bg-blue-600 text-white ml-8' 
                              : 'bg-gray-700 text-gray-100 mr-8'
                          }`}
                        >
                          <div className="text-xs opacity-70 mb-1">
                            {message.type === 'user' ? 'You' : 'AI Tutor'}
                          </div>
                          {message.text}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
