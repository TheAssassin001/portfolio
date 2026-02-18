'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="border border-[#00ff41]/30 p-8 md:p-12 bg-black/60 backdrop-blur-md relative overflow-hidden"
        >
          {/* Glitchy background text */}
          <div className="absolute -top-10 -right-10 text-9xl font-bold text-[#00ff41]/5 select-none pointer-events-none">
            DATA_STREAM
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-glow text-[#00ff41] font-mono">
            {`[ ABOUT_ME ]`}
          </h2>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-[#00ff41]/80 leading-relaxed font-mono"
            >
              <p className="text-base md:text-lg">
                <span className="text-white opacity-50 block mb-1">INITIALIZING BIO...</span>
                I am a driven <strong className="text-white">Front-End Developer</strong> who pivoted from <strong className="text-white">Engineering (Robotics)</strong> to follow a passion for software and web systems.
                Currently, I am pursuing my <strong className="text-white">BCA at DCSMAT Vagamon</strong> while contributing as an <strong className="text-white">Intern at Innovature</strong>.
              </p>

              <p className="text-lg border-l-2 border-[#00ff41]/20 pl-4">
                My objective is to merge my foundations in automation with modern web technologies. I specialize in building
                <strong className="text-white">responsive interfaces</strong> and <strong className="text-white">high-performance web applications</strong> that thrive in the digital matrix.
              </p>

              <p className="text-lg">
                <span className="text-white opacity-50 block mb-1">LEARNING_STATUS: ACTIVE_SYNC</span>
                Continuously upgrading my stack from <strong className="text-white">Robotic Systems</strong> to <strong className="text-white">Full-Stack Development</strong>. Focus: React, Next.js, and complex algorithmic logic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <a
                href="/Aswin K Jayan_CV.pdf"
                download
                className="inline-flex items-center px-8 py-3 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 group"
              >
                <span className="mr-2">{`>> FETCH_RESUME.pdf`}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform"
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
