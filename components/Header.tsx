// Header.tsx
"use client";
import { logo } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Industries", target: "industries" },
    { label: "Starlink", target: "starlink" },
    { label: "Solutions", target: "solutions" },
    { label: "News", target: "contact" },
  ]

  const handleScrollToSection = (target: string) => {
    setMenuOpen(false)

    const section = document.getElementById(target)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-6 sm:px-10 h-[10vh] bg-white shadow-sm">
        <Image src={logo} alt="Logo" width={110} height={110} />

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-6 text-[19px] font-normal font-serif pr-6 ">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleScrollToSection(link.target)}
                className="cursor-pointer hover:text-[#2DB34B] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => handleScrollToSection("contact")}
            className="bg-[#2DB34B] py-3 font-medium px-5 font-serif text-[17px] text-white rounded-sm hover:bg-[#27a244] transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                className="text-[18px] font-normal cursor-pointer hover:text-[#2DB34B] transition-colors border-b border-gray-100 pb-4 text-left"
                onClick={() => handleScrollToSection(link.target)}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleScrollToSection("contact")}
              className="bg-[#2DB34B] py-3 font-medium px-5 text-[17px] text-white rounded-sm w-full hover:bg-[#27a244] transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header