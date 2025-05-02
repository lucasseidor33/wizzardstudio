import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {

    const { t } = useLanguage();
  
  return (
    <footer className="mt-12 bg-transparent  bg-black/60  backdrop-blur-lg text-white/80 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">{t.footer.aboutus}</h3>
            <p className="text-sm">{t.footer.description}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">{t.footer.linkdesc}</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#hero" className="text-sm hover:text-white">
                {t.footer.home}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm hover:text-white">
                {t.footer.clients}
                </Link>
              </li>
              <Link href="#planes" className="text-sm hover:text-white">
              {t.footer.plans}
                </Link>
              <li>
                <Link href="#contact" className="text-sm hover:text-white">
                {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Contact Us</h3>
            <p className="text-sm">lucasaduranlopez@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/20 text-center text-sm">
          &copy; {new Date().getFullYear()} Wizzard Studios. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
