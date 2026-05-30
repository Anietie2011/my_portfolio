// components/Footer.tsx
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 text-gray-500 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Top Section: Info */}
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-white font-bold text-xl tracking-tight">Anietienteabasi Etim</span>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-gray-400">
            <a href="mailto:anietienteabasietim@gmail.com" className="hover:text-cyan-400 transition underline decoration-white/20 underline-offset-4">
              anietienteabasietim@gmail.com
            </a>
            <a href="tel:+2348107092013" className="hover:text-cyan-400 transition">
              +234 810 709 2013
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-8 text-2xl">
          <a href="https://github.com/anietie2011" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition duration-300" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/Anietiente2011" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition duration-300" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com/anietieetim2011" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition duration-300" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
          <a href="#home" className="text-gray-400 hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="text-gray-400 hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition">Projects</a>
          <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition">Skills</a>
          <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/5 w-full text-center">
          <p className="text-xs tracking-widest uppercase text-gray-600">
            © 2026 Anietie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

