//contexto de favoritos
import { createContext, useState, useEffect, useContext } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoritosFiambala");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritosFiambala", JSON.stringify(favorites));
  }, [favorites]);

  // agregar a favoritos
  const addToFavorites = (servicio) => {
    const existe = favorites.some((item) => item.id === servicio.id);
    if (!existe) {
      setFavorites([...favorites, servicio]);
    }
  };

  // remover de favoritos
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  // vaciar todo
  const clearFavorites = () => setFavorites([]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
