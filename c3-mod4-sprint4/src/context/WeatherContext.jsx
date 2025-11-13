import { createContext, useState, useContext } from "react";
import { fetchWeather } from "../services/WeatherApi";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null); //par ala informacion del tiempo del clima
  const [loading, setLoading] = useState(false); //estado de carga
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city); //recibe la info de api
      setWeatherData(data);
      console.log(data);
    } catch (err) {
      console.error(err);
      setError("No se encontró la ciudad");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
