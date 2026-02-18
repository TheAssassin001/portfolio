'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TerminalOverlay = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [history, setHistory] = useState<string[]>([
        'MATRIX OS v4.2.0 - SECURE_TERMINAL_INITIALIZED',
        'Type "help" for a list of available commands.',
        ''
    ])
    const inputRef = useRef<HTMLInputElement>(null)
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '`') {
                setIsOpen(prev => !prev)
                e.preventDefault()
            }
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [history])

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault()
        const cmd = input.trim().toLowerCase()
        if (!cmd) return

        let response = ''
        switch (cmd) {
            case 'help':
                response = 'AVAILABLE_COMMANDS: help, ls, whoami, clear, exit, sudo'
                break
            case 'whoami':
                response = 'ASWIN_K_JAYAN [LEVEL_9_ADMIN]'
                break
            case 'ls':
                response = 'portfolio_v2/  about.txt  skills_matrix/  projects/'
                break
            case 'clear':
                setHistory(['MATRIX OS v4.2.0 - SECURE_TERMINAL_INITIALIZED', ''])
                setInput('')
                return
            case 'exit':
                setIsOpen(false)
                setInput('')
                return
            case 'sudo':
                response = 'PERMISSION_DENIED: User is not in the sudoers file. This incident will be reported.'
                break
            default:
                response = `COMMAND_NOT_FOUND: ${cmd}. Type "help" for a list of commands.`
        }

        setHistory(prev => [...prev, `> ${input}`, response, ''])
        setInput('')
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                >
                    <div className="w-full max-w-4xl h-[80vh] md:h-[60vh] border border-[#00ff41] bg-black shadow-[0_0_30px_rgba(0,255,65,0.2)] flex flex-col font-mono">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-[#00ff41]/30 bg-[#00ff41]/10">
                            <span className="text-[#00ff41] text-xs">TERMINAL_SESSION: active</span>
                            <button onClick={() => setIsOpen(false)} className="text-[#00ff41] hover:text-white">
                                [X]
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-2 text-[#00ff41] text-xs md:text-sm scrollbar-hide">
                            {history.map((line, i) => (
                                <div key={i} className={line.startsWith('>') ? 'text-white' : ''}>
                                    {line}
                                </div>
                            ))}
                            <form onSubmit={handleCommand} className="flex">
                                <span className="mr-2 text-white">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-transparent border-none outline-none flex-1 text-[#00ff41]"
                                    autoFocus
                                />
                            </form>
                            <div ref={bottomRef} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default TerminalOverlay
