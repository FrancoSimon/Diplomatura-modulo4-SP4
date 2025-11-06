import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectToHome = () => {
    window.location.href = "/";
  };

  // Componentes de iconos SVG
  const InstagramIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );

  const GithubIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/80  z-50 transition-all duration-300">
        <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
          {/* Logo bg-red-900/90* bg-transparent  --gray-700 --bg-black/80*/}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={redirectToHome}
          >
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="w-[60px] hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Hamburger menu button (mobile) */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Navbar links (desktop) */}
          <div className="hidden md:block">
            <ul className="flex sm:space-x-8 space-x-4 px-4">
              <li>
                <a
                  href="/"
                  className="sm:text-lg text-sm text-white hover:text-orange-400 transition-transform duration-300 transform hover:scale-110 inline-block"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="sm:text-lg text-sm text-white hover:text-orange-400 transition-transform duration-300 transform hover:scale-110 inline-block"
                >
                  Actividades
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="sm:text-lg text-sm text-white hover:text-orange-400 transition-transform duration-300 transform hover:scale-110 inline-block"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="sm:text-lg text-sm text-white hover:text-orange-400 transition-transform duration-300 transform hover:scale-110 inline-block"
                >
                  Contacto
                </a>
              </li>
              {/*<li><a href="/" className="sm:text-lg text-sm text-white hover:text-orange-400 transition-transform duration-300 transform hover:scale-110 inline-block">Soporte</a></li>*/}
            </ul>
          </div>

          {/* Social media links (desktop) - CON SVG */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-100 transition-all duration-300 hover:scale-125"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-100 transition-all duration-300 hover:scale-125"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-100 transition-all duration-300 hover:scale-125"
            >
              <i className="bi bi-box-arrow-in-right"></i>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute w-full bg-black/80 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col px-4 py-2">
            <li className="py-2 text-center">
              <a
                href="/"
                className="text-white hover:text-sky-100 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li className="py-2 text-center">
              <a
                href="/"
                className="text-white hover:text-sky-100 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Actividades
              </a>
            </li>
            <li className="py-2 text-center">
              <a
                href="/"
                className="text-white hover:text-sky-100 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
            </li>
            <li className="py-2 text-center">
              <a
                href="/"
                className="text-white hover:text-sky-100 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </li>
            {/* <li className="py-2 text-center"><a href="/" className="text-white hover:text-sky-100 block" onClick={() => setIsMenuOpen(false)}>Soporte</a></li>*/}
          </ul>
          <div className="flex space-x-4 px-4 py-2 border-t  bg-black justify-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-100"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-100"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-100"
            >
              <i className="bi bi-box-arrow-in-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
