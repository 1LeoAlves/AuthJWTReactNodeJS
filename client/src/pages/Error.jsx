import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#D2B48C] flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-6xl font-bold text-[#8B4513]">404</h1>
      <h2 className="text-2xl font-semibold text-[#A0522D] mt-4">Página Não Encontrada</h2>
      <p className="text-lg text-gray-700 mt-2">Oops! Parece que você se perdeu.</p>
      <Link to="/home" className="mt-6 bg-[#8B4513] text-white py-2 px-4 rounded hover:bg-[#A0522D]">
            Voltar para página principal.
      </Link>
    </div>
  );
};

export default NotFound;
