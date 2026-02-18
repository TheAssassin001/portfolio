'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false)

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 })
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 })

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isTouchDevice) return

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)

            const target = e.target as HTMLElement
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            )
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-6 bg-[#00ff41] pointer-events-none z-[9999] shadow-[0_0_10px_#00ff41] mix-blend-screen hidden md:block"
            style={{
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
                scaleX: isPointer ? 1.5 : 1,
                scaleY: isPointer ? 0.8 : 1,
            }}
            animate={{
                opacity: [0.4, 1, 0.4],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    )
}

export default CustomCursor
