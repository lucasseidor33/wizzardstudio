"use client"
import { useState } from "react";

import Image from "next/image";

import Hero from "./components/hero"
import PlanCard from "./components/plancard";
import { Navbar } from "./components/navbar";
import PortfolioSlider from "./components/portfolio";
import Footer from "./components/footer";
import ContactCta from "./components/contact";
export default function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
console.log('isNavbarOpen',isNavbarOpen)


  return (
<>
<Navbar setIsOpen={setIsNavbarOpen} />
<div className={`${isNavbarOpen ? 'backdrop-blur-3xl' : ''}`}>
<Hero />
<PortfolioSlider />
<PlanCard />
<ContactCta/>
<Footer/>
</div>
</>
     

      
  
  );
}