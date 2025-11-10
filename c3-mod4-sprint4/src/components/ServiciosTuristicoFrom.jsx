import React, { useState } from "react";
import axios from "axios";

const ServiciosTuristicoFrom = () => {
  const [turisticos, setTuristicos] = useState(null);
  const [error, setError] = useState(null);
  const [number, setnumber] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    //validacion super basica (hay hooks para hacer esto)
    if (number <= 0 || isNaN(number)) {
      setError("Ingrese un numero valido (Mayor a cero)");
      return;
    }
    try {
      const { data } = await axios.get(
       `https://69067c12ee3d0d14c135e9b3.mockapi.io/api/v1/actividades?limit=${number}`
      );
      setTuristicos(data);
    } catch (err) {
      console.error(err);
      setError("Error al obtener los servicios turísticos.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 pt-24">
      {/*pt-24 deja el titulo debajo de navbar */}
      <h1 className="text-3xl font-bold mb-6">Servicios Turísticos RFrom</h1>
      <form onSubmit={handleSubmit}>
        <label className="text-lg">
          <input
            type="number"
            placeholder="Ingrese un numero"
            className="mt-4 p-2 rounded text-white text-  shadow shadow-amber-500 border mx-4"
            min="1"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Obtener citas
        </button>
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </form>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 w-full max-w-6xl">
        {turisticos &&
          turisticos.map((turisticosobj, index) => (
            <div
              key={index.id}
              className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-200"
            >
              <div>
                <img
                  src={turisticosobj.imagen}
                  alt={turisticosobj.nombre}
                  className="rounded-xl mb-4 w-full h-40 object-cover"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {turisticosobj.nombre}
                </h2>
                <p className="text-sm text-gray-300 mb-3">
                  {turisticosobj.descripcion}
                </p>
              </div>
              <p className="text-green-400 font-bold text-lg mt-auto">
                ${turisticosobj.precio.toLocaleString("es-AR")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiciosTuristicoFrom;
