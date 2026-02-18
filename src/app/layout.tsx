import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MatrixRain from '@/components/MatrixRain'
import CustomCursor from '@/components/CustomCursor'
import TerminalOverlay from '@/components/TerminalOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Matrix Edition',
  description: 'Digital Portfolio of Aswin K Jayan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="hide-cursor">
      <body className={`${inter.className} hide-cursor`}>
        <CustomCursor />
        <TerminalOverlay />
        <MatrixRain />
        <div className="scanline" />
        {children}
      </body>
    </html>
  )
}
