import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { SpinnerDiamond } from "spinners-react";

const ServiciosTuristicoRef = () => {
  const [turisticos, setTuristicos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const hasFetched = useRef(false);

  const fetchTuristicos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        "https://69067c12ee3d0d14c135e9b3.mockapi.io/api/v1/actividades"
      );
      setTuristicos(data);
    } catch (err) {
      console.error(err);
      setError("Error al obtener los servicios turísticos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!hasFetched.current) {
      fetchTuristicos();
      hasFetched.current = true;
    }
  }, [fetchTuristicos]);
  const serviciosAMostrar = mostrarTodos ? turisticos : turisticos.slice(0, 3);
  return (
    <div
      id="servicios1"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 pt-24"
    >
      {/*pt-24 deja el titulo debajo de navbar */}
      <h1 className="text-3xl font-bold mb-6">
        Servicios Turísticos Ref (usar)
      </h1>
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <SpinnerDiamond
            size={70}
            thickness={100}
            speed={100}
            color="#36ad47"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      )}
      {error && <p className="text-red-400 mt-4">{error}</p>}
      {!loading && !error && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 w-full max-w-6xl">
            {serviciosAMostrar.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-200"
              >
                <div>
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="rounded-xl mb-4 w-full h-40 object-cover"
                  />
                  <h2 className="text-xl font-semibold mb-2">{item.nombre}</h2>
                  <p className="text-sm text-gray-300 mb-3">
                    {item.descripcion}
                  </p>
                </div>
                <p className="text-green-400 font-bold text-lg mt-auto">
                  ${item.precio.toLocaleString("es-AR")}
                </p>
              </div>
            ))}
          </div>

          {/* Botón para ver todos o menos */}
          <button
            onClick={() => setMostrarTodos(!mostrarTodos)}
            className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            {mostrarTodos ? "Ver menos" : "Ver todos los servicios"}
          </button>
        </>
      )}
    </div>
  );
};

export default ServiciosTuristicoRef;
