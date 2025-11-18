//contexto de favoritos
import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

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

    if (existe) {
      toast.info("Ya está en favoritos");
      return;
    }

    setFavorites([...favorites, servicio]);
    toast.success("Agregado a favoritos");
  };

  // remover de favoritos
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
    toast.error("Eliminado de favoritos");
  };

  // vaciar todo
  const clearFavorites = () => {
    setFavorites([]);
    toast.warn("Favoritos vaciados");
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);

