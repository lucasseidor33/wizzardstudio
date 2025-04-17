"use client"
import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const nextSectionRef = useRef<HTMLDivElement>(null)

  return (
    <>
<section
  id="hero"
  className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
  aria-labelledby="hero-heading"
  style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay para oscurecer la imagen si hace falta */}
  <div className="absolute inset-0  z-0" />

  {/* Content container */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 w-full max-w-7xl mx-auto gap-8 md:gap-12">
    {/* Logo animado */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full md:w-2/5 flex justify-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/img/logo.png"
          alt="Logo Wizzard Studio"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>

    {/* Text */}
    <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
      <div className="flex flex-col items-center md:items-start">
        <h1
          id="hero-heading"
          className="text-7xl md:text-9xl font-bold tracking-widest leading-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0px",
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Wizzard
        </h1>
        <h1
          className="text-7xl md:text-9xl font-bold tracking-widest leading-none mt-2 md:mt-4 md:ml-16"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "8px",
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Studio
        </h1>

        <p className="text-white text-lg md:text-2xl font-semibold tracking-wide mt-4 md:mt-6 md:ml-20 text-center md:text-left">
          Diseño web, desarrollo a medida y branding creativo.
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-white text-base md:text-lg font-medium mt-4 md:mt-6 md:ml-20 text-center md:text-left"
      >
        Elevamos tu presencia digital con diseño y tecnología.
      </motion.p>
    </div>
  </div>
</section>



    </>
  )
}
