"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export function Navbar({ setIsOpen }: any) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { t } = useLanguage();

  const openToggleMenu = () => {
    setIsMenuOpen(false)
    setIsOpen(false)
  }

  const closeToggleMenu = () => {
    setIsMenuOpen(true)
    setIsOpen(true)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsOpen(false)
  }

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsOpen(!isMenuOpen)
  }


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300`}>
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-14">
        {/* Logo centrado */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-start space-x-2" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#hero" className="text-gray-200 hover:text-primary">{t.navbar.inicio}</Link>
          <Link href="#projects" className="text-gray-200 hover:text-primary">{t.navbar.clients}</Link>
          <Link href="#planes" className="block py-2 text-white bg-primary rounded-md hover:bg-primary/90 text-center">{t.navbar.plans}</Link>
          <Link href="#contact" className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90">{t.navbar.contact}</Link>

          {/* Dropdown */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/10 text-white border border-white rounded-md px-3 py-1 text-sm appearance-none cursor-pointer transition duration-200 hover:bg-white/20"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 z-20">
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 h-screen w-full bg-black/60 backdrop-blur-lg shadow-lg z-10 transition-all duration-300">
          <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
            <Link href="#hero" onClick={handleLinkClick} className="text-white text-2xl font-semibold hover:text-primary transition">{t.navbar.inicio}</Link>
            <Link href="#projects" onClick={handleLinkClick} className="text-white text-2xl font-semibold hover:text-primary transition">{t.navbar.clients}</Link>
            <Link href="#planes" onClick={handleLinkClick} className="text-white bg-primary rounded-md hover:bg-primary/90 text-xl py-2 px-6 shadow-md">{t.navbar.plans}</Link>
            <Link href="#contact" onClick={handleLinkClick} className="text-white bg-primary rounded-md hover:bg-primary/90 text-xl py-2 px-6 shadow-md">{t.navbar.contact}</Link>

            {/* Idioma selector */}
            <div className="relative inline-block">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="appearance-none bg-white/10 text-white border border-white/20 rounded-md px-4 py-2 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/50 transition w-full pr-8"
  >
    <option value="es">Español</option>
    <option value="en">English</option>
  </select>

  {/* Flecha decorativa */}
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white text-sm">
    ▼
  </div>
</div>
          </div>
        </div>
      )}
    </div>
  </nav>
  );
}
