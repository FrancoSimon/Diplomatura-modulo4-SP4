import { useState, useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import FavoritosModal from "./FavoritosModal";
import { useWatchlist } from "../hooks/useWatchlist";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { weatherData, loading, getWeather } = useWeather();
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [favOpen, setFavOpen] = useState(false);

  useEffect(() => {
    // Solo se ejecuta una vez al montar el Navbar
    getWeather("Fiambalá");
    // Actualiza automáticamente cada 10 minutos
    const interval = setInterval(() => {
      getWeather("Fiambalá");
    }, 600000); // 600000 ms = 10 minutos

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const redirectToHome = () => (window.location.href = "/");

  // Datos del clima (compacto)
  let weatherInfo = null;
  if (weatherData && !loading) {
    const { main, weather, dt } = weatherData;
    const iconCode = weather[0]?.icon;
    const URL = import.meta.env.VITE_ICONWEATHER;
    const iconUrl = `${URL}${iconCode}@2x.png`;
    const horaFiambala = new Date(dt * 1000).toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Argentina/Catamarca",
    });

    weatherInfo = (
      <div className="flex items-center gap-2 text-white text-sm">
        <img src={iconUrl} alt="clima" className="w-8 h-8" />
        <span>{main.temp.toFixed(1)}°C</span>
        <span className="hidden sm:inline text-gray-300 text-xs">
          {horaFiambala}
        </span>
      </div>
    );
  }

  return (
  <>
    <nav className="fixed top-0 left-0 w-full bg-black/80 z-50 transition-all duration-300">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo + Clima */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={redirectToHome}
        >
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-[60px] hover:opacity-80 transition-opacity"
          />

          {weatherInfo}
        </div>

        {/* Botón hamburguesa */}
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
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Menú Desktop */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4 px-4">
            <li>
              <button
                onClick={() => setFavOpen(true)}
                className="sm:text-lg text-sm text-yellow-300 hover:text-yellow-400 transition-transform duration-300 transform hover:scale-110 inline-block"
              >
                ⭐ Favoritos ({watchlist.length})
              </button>
            </li>

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
                href="#servicios"
                className="sm:text-lg text-sm text-white hover:text-orange-400 transition-transform duration-300 transform hover:scale-110 inline-block"
              >
                Servicios Turísticos
              </a>
            </li>

            <li>
              <a
                href="#clima"
                className="sm:text-lg text-sm text-white hover:text-orange-400 transition-transform duration-300 transform hover:scale-110 inline-block"
              >
                Clima
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
          </ul>
        </div>

        {/* Redes Desktop */}
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
            className="text-white hover:text-sky-100 transition-all duration-300 hover:scale-125"
          >
            <i className="bi bi-box-arrow-in-right"></i>
          </a>
        </div>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden absolute w-full bg-black/80 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">

          <li className="py-2 text-center">
            <button
              className="text-yellow-300 hover:text-yellow-400 block mx-auto"
              onClick={() => {
                setFavOpen(true);
                setIsMenuOpen(false);
              }}
            >
              ⭐ Favoritos ({watchlist.length})
            </button>
          </li>

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
              href="#servicios"
              className="text-white hover:text-sky-100 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios Turísticos
            </a>
          </li>

          <li className="py-2 text-center">
            <a
              href="#clima"
              className="text-white hover:text-sky-100 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Clima
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
        </ul>

        <div className="flex space-x-4 px-4 py-2 border-t bg-black justify-center">
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
          <a href="/" className="text-white hover:text-sky-100">
            <i className="bi bi-box-arrow-in-right"></i>
          </a>
        </div>
      </div>
    </nav>

    {/* MODAL DE FAVORITOS */}
    <FavoritosModal
      isOpen={favOpen}
      onClose={() => setFavOpen(false)}
      watchlist={watchlist}
      removeFromWatchlist={removeFromWatchlist}
    />
  </>
);

};

export default Navbar;
