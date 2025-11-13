import React, { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const SearchForm = () => {
  const [city, setCity] = useState(""); // manejar la consulta
  const { getWeather } = useWeather();  // obtiene la función del contexto

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    if (city.trim() === "") return; // evita búsquedas vacías
    getWeather(city); // llama a la API
    setCity(""); // limpia el input
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 justify-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ingrese ciudad o provincia"
        className="p-2 border border-gray-400 rounded w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
