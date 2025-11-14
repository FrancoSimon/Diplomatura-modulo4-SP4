//Modal de favoritos
import { Button } from "./Button";

// Modal que muestra los destinos guardados
const FavoritosModal = ({
  isOpen,
  onClose,
  watchlist,
  removeFromWatchlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-100 w-full max-w-2xl rounded-2xl shadow-xl relative flex flex-col max-h-[80vh]">
        {/* encabezado del modal */}
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800">
            Mis destinos favoritos
          </h2>
          <Button
            onClick={onClose}
            variant=""
            className="!p-2 !bg-transparent !text-gray-600 hover:!text-gray-800 !shadow-none text-xl"
          >
            <i className="bi bi-x-lg"></i>
          </Button>
        </div>

        {/* Contenido con scroll */}
        <div className="flex-1 overflow-y-auto p-6">
          {watchlist.length === 0 ? (
            <div className="text-center py-8">
              <i className="bi bi-heart text-4xl text-gray-400 mb-3"></i>
              <p className="text-gray-500 text-lg">
                No tienes destinos guardados.
              </p>
              <p className="text-gray-400 text-sm">
                Agrega algunos destinos a tus favoritos
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {watchlist.map((d) => (
                <div
                  key={d.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={d.imagen}
                    alt={d.nombre}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-center items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 flex-1 pr-2">
                        {d.nombre}
                      </h3>
                      <Button
                        onClick={() => removeFromWatchlist(d.id)}
                        variant=""
                        title="Quitar de favoritos"
                      >
                        <i className="bi bi-heartbreak-fill"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/*contador al final*/}
        {watchlist.length > 0 && (
          <div className="border-t border-gray-300 px-6 py-3 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              {watchlist.length}{" "}
              {watchlist.length === 1
                ? "destino guardado"
                : "destinos guardados"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritosModal;
