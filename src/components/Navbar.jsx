import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-gray-100 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o nombre */}
        <h1 className="text-xl font-bold text-cyan-400 tracking-wide">
          MG
        </h1>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden text-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación desktop */}
        <ul className="hidden md:flex gap-6 font-medium">
          {/*<li><a href="#about" className="hover:text-cyan-400">Sobre mí</a></li>*/}
          <li><a href="#projects" className="hover:text-cyan-400">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contacto</a></li>
        </ul>
      </div>

      {/* Navegación mobile desplegable */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-900 px-6 pb-6 pt-2 space-y-4 font-medium">
          <li><a href="#about" onClick={toggleMenu} className="block hover:text-cyan-400">Sobre mí</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block hover:text-cyan-400">Proyectos</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block hover:text-cyan-400">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}
