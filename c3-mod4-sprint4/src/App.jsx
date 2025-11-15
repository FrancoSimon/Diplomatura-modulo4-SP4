import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import ServiciosTuristicos from "./components/ServiciosTuristicos.jsx";

import { WeatherProvider } from "./context/WeatherContext.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import SearchForm from "./components/SearchFrom.jsx";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";

// Providers nuevos
import { CartProvider } from "./context/CartContext.jsx";
import { FavoriteProvider } from "./context/FavoriteContext.jsx";

const App = () => {
  useEffect(() => {
    toast.info("Bienvenido a Tierra de Encantos");
  }, []);

  return (
    <>
      <WatchlistProvider>
        <FavoriteProvider>
          <CartProvider>
            {/* NAVBAR SIEMPRE ARRIBA */}
            <WeatherProvider>
              <Navbar />
            </WeatherProvider>

            <div className="flex flex-col min-h-screen">
              <main className="grow">
                {/* HERO / CABECERA */}
                <Header />

                {/* SERVICIOS + BOTÓN AGREGAR A FAVORITOS */}
                <ServiciosTuristicos />

                {/* SECCIÓN CLIMA */}
                <WeatherProvider>
                  <div
                    id="clima"
                    className="flex flex-col items-center justify-center bg-gray-300 p-4 pt-22"
                  >
                    <h1 className="text-3xl font-bold">
                      Pronóstico del tiempo
                    </h1>
                    <SearchForm />
                    <WeatherCard />
                  </div>
                </WeatherProvider>

                {/* TOASTS */}
                <ToastContainer
                  position="bottom-right"
                  autoClose={3000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                  theme="dark"
                />
              </main>

              {/* FOOTER */}
              <Footer />
            </div>
          </CartProvider>
        </FavoriteProvider>
      </WatchlistProvider>
    </>
  );
};

export default App;
