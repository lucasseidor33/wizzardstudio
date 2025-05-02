"use client"

import { useEffect, useState } from "react"
import Hero from "./components/hero"
import PlanCard from "./components/plancard"
import { Navbar } from "./components/navbar"
import PortfolioSlider from "./components/portfolio"
import Footer from "./components/footer"
import ContactCta from "./components/contact"
import { LanguageProvider } from "./context/LanguageContext"
import FlowiseWidget from "./components/flowiseWidget"

export default function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)


  return (
    <LanguageProvider>
      <Navbar setIsOpen={setIsNavbarOpen} />
      <div className={`${isNavbarOpen ? "backdrop-blur-3xl" : ""}`}>
        <Hero />
        <PortfolioSlider />
        <PlanCard />
        <ContactCta />
        <Footer />
        <FlowiseWidget />

      </div>
    </LanguageProvider>
  )
}
