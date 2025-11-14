import { useState, useEffect } from "react";

// Hook personalizado de favoritos
export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (destino) => {
    if (!watchlist.some((item) => item.id === destino.id)) {
      setWatchlist([...watchlist, destino]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
};
