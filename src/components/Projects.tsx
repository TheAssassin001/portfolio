'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: "Let's Learn Chinese",
    description: 'A professional Chinese language tutoring website featuring responsive design, interactive contact form, and service information.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://language-tutor-liart.vercel.app/',
    githubUrl: 'https://github.com/TheAssassin001/Language_tutor',
    status: 'Live',
    year: '2024',
  },
  {
    title: 'Santa Carnival',
    description: 'A modern e-commerce website built with Shopify for the Santa Carnival brand. Features custom theme, product catalog, secure checkout, and responsive design.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    liveUrl: 'https://santacarnival.in/',
    githubUrl: '',
    status: 'Live',
    year: '2024',
  },
  // Add more projects here
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          {project.status}
                        </span>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
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
