'use client'

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">💎 Diamond Shop</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 flex flex-col items-center space-y-4"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
