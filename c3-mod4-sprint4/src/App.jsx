import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import ServiciosTuristicos from "./components/ServiciosTuristicos.jsx";


const App = () => {

  useEffect(()=>{
toast("Bienvenido a Tierra de Encantos")
  },[])

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Header />
          <ServiciosTuristicos />
          <ToastContainer
          position="bottom-right"
          autoClose="3000"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
        </main>
        <Footer />
      </div>

    </>
  );
};

export default App;
