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
    <section id="skills" className="section-padding bg-transparent">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#00ff41] font-mono text-glow">
            {`[ TECH_STACK ]`}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: '#00ff41' }}
                className="bg-black/40 border border-[#00ff41]/20 p-6 backdrop-blur-sm transition-all duration-300 text-center relative group"
              >
                <div className="absolute top-1 left-1 text-[8px] text-[#00ff41]/30 font-mono">
                  MOD_{index.toString().padStart(2, '0')}
                </div>
                <div className="text-4xl mb-3 grayscale brightness-125 group-hover:grayscale-0 transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-mono text-[#00ff41] tracking-tighter uppercase relative z-10">
                  {`> ${skill.name}`}
                </h3>
                <div className="absolute inset-0 bg-[#00ff41]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
