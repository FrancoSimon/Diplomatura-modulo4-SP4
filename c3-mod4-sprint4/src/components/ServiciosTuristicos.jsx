import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//import { useFavorites } from "../context/FavoriteContext"; //favites
//import { useCart } from "../context/CartContext"; //favorites
import { useWatchlist } from "../context/WatchlistContext"; //favotimodal

const ServiciosTuristicos = () => {
  const [turisticos, setTuristicos] = useState([]);
  const [error, setError] = useState(null);
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");
  //const { addToFavorites } = useFavorites();
  //const { addToCart } = useCart();
  const { addToWatchlist } = useWatchlist();

  // obtener por cantidad
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSearch("");
    setTuristicos([]);

    const cantidad = parseInt(number);
    //validacion par evitar errores
    if (isNaN(cantidad) || cantidad <= 0) {
      toast.warning("Debe ingresar un número válido mayor a cero");
      return;
    }
    //toast.info("Cargando servicios turísticos...");
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVTUR_KEY}?page=1&limit=${cantidad}` //api
      );
      setTuristicos(data);
      toast.success("Servicos obtenidos correctamente");
    } catch (err) {
      console.error(err);
      toast.error("Error al obtener los servicios turísticos.");
    }
  };

  //buscar por nombre

  const handleBusqueda = async (e) => {
    e.preventDefault();

    setError("");
    setNumber("");
    setTuristicos([]);

    const termino = search.trim().toLowerCase();
    if (!termino) {
      toast.warning("Debe ingresar un nombre para buscar");
      return;
    }
    {
      /*toast.info("Buscando servicios turísticos...");*/
    }
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVTUR_KEY}`);
      const resultado = data.filter((item) =>
        item.nombre.toLowerCase().includes(termino)
      );
      if (resultado.length === 0) {
        toast.error("Error al obtener los servicios turísticossss.");
      } else {
        setTuristicos(resultado);
        toast.success("Servicios encontrados correctamente");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error al obtener los servicios turísticos.");
    }
  };

  return (
    <div
      id="servicios"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 pt-22"
    >
      <h1 className="text-3xl font-bold mb-6">Servicios Turísticos</h1>
      {/*Formulario por cantidad*/}
      <form onSubmit={handleSubmit} className="mb-6 flex items-center gap-3">
        <input
          type="number"
          placeholder="Ingrese un número"
          className="p-2 rounded bg-gray-800 border shadow shadow-amber-500"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Obtener servicios
        </button>
      </form>

      {/*Formulario por búsqueda*/}
      <form onSubmit={handleBusqueda} className="mb-6 flex items-center gap-3">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="p-2 rounded bg-gray-800 border shadow shadow-amber-500"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            const soloTexto = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
            setSearch(soloTexto);
          }}
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Buscar por nombre
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/*Resultado*/}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 w-full max-w-6xl">
        {Array.isArray(turisticos) &&
          turisticos.map((turistico) => (
            <div
              key={turistico.id}
              className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-200"
            >
              <div>
                <img
                  src={turistico.imagen}
                  alt={turistico.nombre}
                  className="rounded-xl mb-4 w-full h-40 object-cover"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {turistico.nombre}
                </h2>
                <p className="text-sm text-gray-300 mb-3">
                  {turistico.descripcion}
                </p>
              </div>

              <p className="text-green-400 font-bold text-lg mt-auto">
                ${turistico.precio.toLocaleString("es-AR")}
              </p>

              {/* Botones */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => addToWatchlist(turistico)}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white"
                >
                  ⭐ Agregar a Favoritos
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiciosTuristicos;
