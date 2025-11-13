import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import ServiciosTuristicos from "./components/ServiciosTuristicos.jsx";
import { WeatherProvider } from "./context/WeatherContext.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import SearchForm from "./components/SearchFrom.jsx";

const App = () => {
  console.log(import.meta.env.VITE_SERVTUR_KEY); //sacar
  useEffect(() => {
    toast.info("Bienvenido a Tierra de Encantos");
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="grow">
          <Header />
          <ServiciosTuristicos />
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
        <WeatherProvider>
          <Navbar />
          <div
            id="clima"
            className="flex flex-col items-center justify-center bg-gray-300 p-4 pt-22"
          >
            <h1 className="text-3xl font-bold">Pronóstico del tiempo</h1>
            <SearchForm />
            <WeatherCard />
          </div>
        </WeatherProvider>

        <Footer />
      </div>
    </>
  );
};

export default App;
