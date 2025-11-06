import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { ExampleAxios } from "./components/exampleAxios.jsx";
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
        </main>
        <Footer />
      </div>
      <div>
        <ExampleAxios />
      </div>
    </>
  );
};

export default App;
