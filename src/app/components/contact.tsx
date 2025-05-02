"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext";

export default function ContactCta() {

    const { t } = useLanguage();
  
  return (
    <section
    id="contact"
      className="relative w-full min-h-[70vh]  text-white px-6 py-20 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/img/pergamino-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0  z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
            style={{
              letterSpacing: "0px",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
            }}
          >
           {t?.contact?.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/80 text-lg md:text-xl"
           
          >
           {t?.contact?.subtitle}
           </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Link
  href="https://wa.me/5493855079729?text=Hola%2C%20te%20contacto%20desde%20Wizzard%20Studio%20porque%20estoy%20interesado%20en%20planificar%20mi%20pr%C3%B3xima%20p%C3%A1gina%20web.%20%C2%BFPodemos%20hablar%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-full font-semibold shadow-md backdrop-blur-sm"
>
  {t.contact?.button}
</Link>

          </motion.div>
        </div>

        {/* Imagen a la derecha con animación flotante y rotación en diagonal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="rotate-[12deg]" // diagonal
          >
            <Image
              src="/img/contact.png"
              alt="Sombrero mágico"
              width={500}
              height={500}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
