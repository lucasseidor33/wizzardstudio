"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function ProjectsShowcase() {
  const { t } = useLanguage()
  const projects = t.caroussel.projects
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }, 7000)
    return () => clearInterval(interval)
  }, [projects.length])

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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white">
            {t.caroussel.title}
          </h2>
          <p className="mt-4 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
            {t.caroussel.subtitle}
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
                  src={projects[currentProject].media}
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
                {t.caroussel.buttonProject}
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
