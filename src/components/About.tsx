'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-600 leading-relaxed"
            >
              <p className="text-lg">
                I&apos;m a passionate <strong className="text-gray-900">web developer</strong> with a strong interest in building clean, 
                responsive, and user-friendly websites. I focus on creating modern designs that work smoothly 
                across all devices and provide a great user experience.
              </p>

              <p className="text-lg">
                My work mainly involves developing <strong className="text-gray-900">personal portfolios</strong>, 
                <strong className="text-gray-900"> landing pages</strong>, and <strong className="text-gray-900">web applications</strong>. 
                I enjoy turning simple ideas into functional and visually appealing websites while keeping 
                performance and clarity in mind.
              </p>

              <p className="text-lg">
                I&apos;m always learning and improving my skills, exploring better design practices, and staying 
                updated with modern web technologies. My goal is to deliver reliable, well-structured websites 
                that help individuals and businesses build a strong online presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <a
                href="/Aswin K Jayan_CV.pdf"
                download
                className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Download Resume
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
