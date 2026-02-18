'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Intern',
    company: 'Innovature',
    duration: 'Jan 2026 - Present',
    description: [
      'Contributing to front-end development projects within Infopark Phase 2',
      'Implementing responsive UI components using modern web stacks',
      'Collaborating in a remote-first professional environment',
    ],
    skills: ['JavaScript', 'React', 'Tailwind CSS', 'Next.js'],
  },
  {
    role: 'Graduate Student (BCA)',
    company: 'DCSMAT Institutions',
    duration: 'Sep 2023 - Present',
    description: [
      'Focusing on Computer Programming and Application development',
      'Advanced study in C, C++, and Python (Programming Languages)',
      'Developing data-driven applications as part of academic curriculum',
    ],
    skills: ['Python', 'C', 'C++', 'Data Structures'],
  },
  {
    role: 'B-Tech Studies (Discontinued)',
    company: 'Saintgits College of Engineering',
    duration: '2019 - 2024',
    description: [
      'Pursued Undergraduate studies in Robotics and Automation',
      'Acquired foundational knowledge in embedded systems and engineering logic',
      'Pivoted to Computer Applications (BCA) to focus on full-stack web development',
    ],
    skills: ['Robotics', 'Automation', 'Embedded Systems', 'C++'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-transparent">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#00ff41] font-mono text-glow">
            {`[ WORK_HISTORY ]`}
          </h2>

          <div className="max-w-4xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l border-[#00ff41]/20 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-3 h-3 bg-[#00ff41] shadow-[0_0_8px_#00ff41] rounded-full transform -translate-x-1/2 mt-2 animate-pulse"></div>

                <div className="bg-black/40 border border-[#00ff41]/10 p-6 backdrop-blur-sm hover:border-[#00ff41]/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#00ff41] font-mono">{`> ${exp.role}`}</h3>
                    <span className="text-sm text-[#00ff41]/60 font-mono tracking-tighter bg-[#00ff41]/5 px-2 py-1">
                      {`[ ${exp.duration} ]`}
                    </span>
                  </div>

                  <p className="text-white/60 font-mono mb-6 text-sm italic">{`at_location: "${exp.company}"`}</p>

                  <ul className="space-y-3 mb-6 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#00ff41]/5 translate-x-1" />
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[#00ff41]/80 flex items-start font-mono text-sm group">
                        <span className="text-[#00ff41]/40 mr-3 group-hover:text-[#00ff41] transition-colors">0x0{i + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 border border-[#00ff41]/20 text-[#00ff41]/70 text-xs font-mono lowercase hover:border-[#00ff41] hover:text-[#00ff41] transition-colors"
                      >
                        {`#${skill}`}
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
