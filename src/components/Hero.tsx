'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Typewriter = ({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i))
          i++
        } else {
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay, speed])

  return <span>{displayedText}<span className="animate-pulse">_</span></span>
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="container-custom px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-left font-mono border border-[#00ff41]/20 p-8 md:p-12 relative bg-black/40 backdrop-blur-sm"
        >
          {/* Terminal header */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-[#00ff41]/10 flex items-center px-4 space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <span className="text-[10px] text-[#00ff41]/50 ml-2">aswin@portfolio: ~</span>
          </div>

          <div className="mt-4">
            <span className="text-white opacity-50">$ </span>
            <span className="text-[#00ff41]">whoami</span>
            <div className="mt-4 mb-8">
              <div className="relative w-24 h-24 md:w-40 md:h-40 mb-6 border border-[#00ff41] p-1 shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                <Image
                  src="/profile.jpg"
                  alt="Aswin K. Jayan"
                  fill
                  className="object-cover grayscale sepia-[.5] hue-rotate-[90deg] brightness-75 transition-all duration-500 hover:grayscale-0 hover:sepia-0 hover:hue-rotate-0 hover:brightness-100"
                  priority
                />
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-4 text-[#00ff41] text-glow glitch leading-tight" data-text="Aswin K. Jayan">
                <Typewriter text="Aswin K. Jayan" delay={500} />
              </h1>
              <p className="text-lg md:text-2xl text-[#00ff41]/80 mb-6 font-mono">
                <span className="text-white opacity-50">$ </span>
                <Typewriter text="locate --profession" delay={2000} />
                <br />
                <span className="text-white mt-2 block tracking-wider uppercase bg-[#00ff41]/10 px-2 w-fit text-sm md:text-base">
                  [ Front-End Web Developer ]
                </span>
              </p>
            </div>

            <div className="mb-12 max-w-2xl">
              <span className="text-white opacity-50">$ </span>
              <span className="text-[#00ff41]">cat summary.txt</span>
              <p className="mt-2 text-[#00ff41]/70 leading-relaxed">
                <Typewriter
                  text="Building modern, responsive web experiences with clean code and attention to detail. Initializing deep dive into digital aesthetics..."
                  delay={3500}
                  speed={30}
                />
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6 }}
            >
              <a
                href="#projects"
                className="inline-block border border-[#00ff41] px-8 py-3 text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">{`[ ACCESS_PROJECTS ]`}</span>
                <div className="absolute inset-0 bg-[#00ff41] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00ff41] text-xs font-mono"
      >
        <div className="flex flex-col items-center">
          <span>SCROLL_TO_DESCEND</span>
          <div className="w-[1px] h-10 bg-[#00ff41]/30 mt-2 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 40] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-full h-1/3 bg-[#00ff41]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
