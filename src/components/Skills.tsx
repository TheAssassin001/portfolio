'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Git', icon: '🔧' },
  { name: 'GitHub', icon: '🐙' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
