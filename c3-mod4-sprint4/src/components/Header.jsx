import { Motionhearder } from "./Motionhearder"; 

export const Header = () => {
  return (
    <header className="min-h-screen w-full text-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/src/assets/Fondo-1200x600.jpg')]"></div>
      
      <Motionhearder>
        <h1 className="font-VollkornSC text-4xl md:text-6xl font-bold">Catamarca Secreta</h1>
        <p className="font-OpenSans mt-4 text-white text-lg md:text-2xl">
          Entre puna, valles y montañas, un mundo secreto te espera
        </p>
      </Motionhearder>
    </header>
  );
};
