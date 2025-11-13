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
        <Navbar />
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
          <div className="flex flex-col items-center justify-center bg-gray-300">
            <h1 className="text-3xl font-bold m-0">Weather app</h1>
          </div>
          <SearchForm />
          <WeatherCard />
        </WeatherProvider>

        <Footer />
      </div>
    </>
  );
};

export default App;
