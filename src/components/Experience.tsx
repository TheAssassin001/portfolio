'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    duration: '2024 - Present',
    description: [
      'Developing custom websites for clients including portfolios and landing pages',
      'Creating responsive and user-friendly web experiences',
      'Working with modern web technologies and frameworks',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  },
  // Add more experiences here
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l-2 border-primary-200 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-[9px]"></div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-sm text-primary-600 font-medium">{exp.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 font-medium mb-4">{exp.company}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
