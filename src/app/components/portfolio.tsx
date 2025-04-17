"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  media: string
  type: "video" | "gif"
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Caobas marketing agency",
    description: "Una tienda online totalmente responsive con carrito de compras.",
    media: "/video/project1.mp4",
    type: "video",
    link: "https://caobas.vercel.app",
  },
  {
    id: 2,
    title: "Mcstudio beauty salon",
    description: "Portfolio personal con transiciones animadas y diseño moderno.",
    media: "/video/project2.mp4",
    type: "video",
    link: "https://mcstudio-2ebq.vercel.app",
  },
]

export default function ProjectsShowcase() {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section id="projects" className="w-full py-16 bg-gradient-to-b from-background to-muted text-white">
      <div className="px-6 md:px-10 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start text-left mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-wider text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0px",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Nuestro Trabajo
          </h2>
          <p className="mt-4 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
            Creamos experiencias digitales excepcionales que transforman ideas en realidades impactantes.
          </p>
        </motion.div>

        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          <div className="rounded-lg overflow-hidden">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video w-full overflow-hidden rounded-lg"
            >
              {projects[currentProject].type === "video" ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={projects[currentProject].media} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={projects[currentProject].media || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col md:flex-row items-start justify-between gap-4">
          <motion.div
            key={`info-${currentProject}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold">{projects[currentProject].title}</h3>
              <p className="text-white/70 mt-2">{projects[currentProject].description}</p>
            </div>

            {projects[currentProject].link && (
              <a
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 inline-block px-5 py-2 text-sm font-medium rounded-full border border-white/30 text-white hover:bg-white/10 transition self-center md:self-auto"
                >
                Ir al proyecto!
              </a>
            )}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {[prevProject, nextProject].map((fn, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={fn}
                className="inline-flex items-center justify-center rounded-full h-10 w-10 border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
              >
                {i === 0 ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"

// const projects = [
//   {
//     id: 1,
//     title: "Caobas Marketing Agency",
//     description: "Landing page para empresa de maderas. Diseño limpio, responsive y optimizado para SEO local.",
//     image: "/img/card1.png",
//     link: "https://caobas.vercel.app/",
//   },
//   {
//     id: 2,
//     title: "Mc Studio",
//     description: "Sitio de salon de belleza profesional ",
//     image: "/img/card2.png",
//     link: "https://mcstudio-2ebq.vercel.app/",
//   },
// ]

// export default function PortfolioSlider() {
//   const [current, setCurrent] = useState(0)
//   const length = projects.length

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
//     }, 6000)
//     return () => clearInterval(interval)
//   }, [length])

//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Título de sección */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-extrabold tracking-tight mb-4">
//             Transformaciones digitales que marcan la diferencia
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Una selección de los trabajos que he diseñado y desarrollado para marcas, negocios locales y clientes reales.
//           </p>
//         </div>

//         {/* Slider animado */}
//         <AnimatePresence mode="wait">
//           {projects.map((project, index) => (
//             index === current && (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -40 }}
//                 transition={{ duration: 1, ease: "easeInOut" }}
//                 className="flex flex-col md:flex-row items-center gap-12 mb-10"
//               >
//                 {/* Imagen */}
//                 <motion.div
//                   initial={{ scale: 0.95, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 1, ease: "easeInOut" }}
//                   className="w-full md:w-1/2"
//                 >
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={600}
//                     height={400}
//                     className="rounded-xl shadow-2xl object-cover border border-white/10"
//                   />
//                 </motion.div>

//                 {/* Texto */}
//                 <div className="w-full md:w-1/2 text-left space-y-6">
//                   <h3 className="text-4xl font-bold leading-tight">{project.title}</h3>
//                   <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block border border-white text-white font-light px-6 py-3 rounded-lg transition hover:bg-white hover:text-black"
//                   >
//                     Ver proyecto
//                   </a>
//                 </div>
//               </motion.div>
//             )
//           ))}
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }
