'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md border-b border-[#00ff41]/30' : 'bg-transparent'
          }`}
      >
        <div className="container-custom px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-glow text-[#00ff41] glitch" data-text="[ Aswin_K_Jayan ]">
              [ Aswin_K_Jayan ]
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#00ff41]/80 matrix-link text-sm font-medium tracking-widest uppercase"
                >
                  {`> ${item.name}`}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#00ff41] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-8 mt-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#00ff41] text-2xl font-mono tracking-wider flex items-center group"
                  >
                    <span className="text-white/20 mr-4">0{index + 1}</span>
                    <span className="group-hover:text-glow transition-all">{`> ${item.name}`}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 left-6 right-6 border-t border-[#00ff41]/20 pt-8">
              <div className="text-[10px] text-[#00ff41]/40 font-mono tracking-[0.2em] mb-4">
                SYSTEM_STATUS: SECURE_MOBILE_LINK
              </div>
              <div className="text-xs text-[#00ff41]/60 font-mono italic">
                {`"Unlocking the digital matrix..."`}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
