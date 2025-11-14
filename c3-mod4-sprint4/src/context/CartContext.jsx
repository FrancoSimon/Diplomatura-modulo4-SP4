//contexto del carrito

import { createContext, useState, useEffect, useContext } from "react";

//contexto: esatdo global accesible de cualquier componente
const CartContext = createContext();

// PROVEEDOR: Envuelve la app y provee el estado
export const CartProvider = ({ children }) => {
  // Estado inicial: carga desde localStorage o array vacío
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("carritoFiambala");
    return saved ? JSON.parse(saved) : [];
  });

  // Efecto: guarda en localStorage cuando el carrito cambia
  useEffect(() => {
    localStorage.setItem("carritoFiambala", JSON.stringify(cart));
  }, [cart]);

  // FUNCIÓN: Agregar servicio al carrito
  const addToCart = (servicio) => {
    const existe = cart.find((item) => item.id === servicio.id);
    if (existe) {
      // Si ya existe, incrementa cantidad
      setCart(
        cart.map((item) =>
          item.id === servicio.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Si no existe, agrega nuevo con cantidad 1
      setCart([...cart, { ...servicio, cantidad: 1 }]);
    }
  };

   // FUNCIÓN: Remover servicio del carrito
  const removeFromCart = (id) => {
    const item = cart.find((s) => s.id === id);
    if (item.cantidad > 1) {
      // Si tiene más de 1, disminuye cantidad
      setCart(
        cart.map((s) =>
          s.id === id ? { ...s, cantidad: s.cantidad - 1 } : s
        )
      );
    } else {
      // Si tiene 1, elimina completamente
      setCart(cart.filter((s) => s.id !== id));
    }
  };

  // FUNCIÓN: Vaciar todo el carrito
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// HOOK PERSONALIZADO: Para usar el contexto fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
