import React from "react";
import { useWeather } from "../context/WeatherContext";

const WeatherCard = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <p className="text-gray-700">Loading....</p>;
  if (error) return <p className="text-gray-700">{error}</p>;

  // Evita el error si weatherData aún no existe
  if (!weatherData) return <p className="text-gray-700">No hay datos disponibles.</p>;

  const { name, weather, main } = weatherData;

  return (
    <div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-700">{weather[0]?.description}</p>
      <p className="text-gray-700">{main?.temp}°C</p>
    </div>
  );
};

export default WeatherCard;
