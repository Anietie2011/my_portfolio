// components/Footer.tsx

export default function Footer() {
return ( <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500"> <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"> <p className="text-sm">
© 2026 Anietie. All rights reserved. </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400 ">
    
    <span>
      <span className="text-white font-semibold">Anietienteabasi Etim</span>
    </span>

    <a
      href="mailto:anietienteabasietim@gmail.com"
      className="hover:text-white transition underline"
    >
      anietienteabasietim@gmail.com
    </a>

    <a
      href="tel:+44XXXXXXXXXX"
      className="hover:text-white transition"
    >
      +234 810 709 2013
    </a>

  </div>
 
    <div className="flex gap-6 text-sm">
      <a
        href="#home"
        className="hover:text-white transition"
      >
        Home
      </a>
      <a
        href="#about"
        className="hover:text-white transition"
      >
        About
      </a>

      <a
        href="#projects"
        className="hover:text-white transition"
      >
        Projects
      </a>

      <a
        href="#skills"
        className="hover:text-white transition"
      >
        Skills
      </a>

      <a
        href="#contact"
        className="hover:text-white transition"
      >
        Contact
      </a>
    </div>
  </div>
</footer>
 

);
}
