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
    year: '2026',
  },
  {
    title: 'Santa Carnival',
    description: 'A modern e-commerce website built with Shopify for the Santa Carnival brand. Features custom theme, product catalog, secure checkout, and responsive design.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    liveUrl: 'https://santacarnival.in/',
    status: 'Live',
    year: '2025',
  },
  {
    title: 'AKT Practice',
    description: 'A practice and learning platform. Ongoing project focused on building interactive features and modern UI/UX.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://akt-practice.vercel.app/',
    status: 'Ongoing',
    year: '2026',
  },
  {
    title: 'NecroWarp Game',
    description: 'A browser-based arcade game experience with unique mechanics and retro aesthetics.',
    tech: ['React', 'TypeScript', 'Vercel'],
    liveUrl: 'https://barelysolde.red/',
    status: 'Ongoing',
    year: '2026',
  },
  // Add more projects here
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-transparent">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#00ff41] font-mono text-glow">
            {`[ DEPLOYED_PROJECTS ]`}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, borderColor: '#00ff41' }}
                className="bg-black/60 border border-[#00ff41]/20 backdrop-blur-md overflow-hidden group transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#00ff41] font-mono mb-2 text-glow">
                        {`./${project.title.toLowerCase().replace(/ /g, '_')}`}
                      </h3>
                      <div className="flex items-center gap-3 font-mono">
                        <span className="text-[10px] px-2 py-0.5 border border-[#00ff41]/50 text-[#00ff41] animate-pulse">
                          {project.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-[#00ff41]/40">{`ts: ${project.year}`}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#00ff41]/70 mb-6 leading-relaxed font-mono text-sm">
                    {`desc: "${project.description}"`}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#00ff41]/10 text-[#00ff41]/70 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 font-mono">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 text-xs"
                    >
                      <span>VIEW_LIVE_DEMO</span>
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-[#00ff41]/30 text-[#00ff41]/50 hover:border-[#00ff41] hover:text-[#00ff41] transition-all duration-300 text-xs"
                      >
                        <span>GET_SOURCE</span>
                      </a>
                    )}
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
