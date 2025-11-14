//Componente reutilizable
// Crear botón con variantes
export const Button = ({ children, onClick, variant = "primary" }) => {
  // Lógica de estilos según variant
  const base = "bg-white text-black px-4 py-2 rounded-3xl font-semibold transition  cursor-pointer  text-sm sm:text-base md:text-lg lg:text-xl";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 "
      : "bg-black text-gray-800 hover:bg-gray-300";
      
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
