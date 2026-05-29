// components/Navbar.tsx

export default function Navbar() {
return ( 

    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40"> 
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> 
        <h1 className="text-2xl font-black tracking-wider">
          ANIETIE
          <span className="text-cyan-400">
            .
          </span> 
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
);
}
