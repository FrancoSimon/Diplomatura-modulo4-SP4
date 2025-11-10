import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import ServiciosTuristicos from "./components/ServiciosTuristicos.jsx";
import ServiciosTuristicosCallback from "./components/ServiciosTuristicosCallback.jsx";
import ServiciosTuristicoRef from "./components/ServiciosTuristicoRef.jsx";
import ServiciosTuristicoFrom from "./components/ServiciosTuristicoFrom.jsx";

//import { ExampleAxios } from "./components/ExampleAxios.jsx";
{
  /*import { Destinos } from "./components/Destinos.jsx";*/
}

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Header />
          {/*<ServiciosTuristicos />*/}
          {/*<ServiciosTuristicosCallback />*/}
          <ServiciosTuristicoRef />
          <ServiciosTuristicoFrom />
        </main>
        <Footer />
      </div>
      <div>{/*<ExampleAxios />*/}</div>
    </>
  );
};

export default App;
