import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [quadros] = useState([
    { id: 1, title: "Pôr do Sol", price: "R$ 150,00", image: "https://via.placeholder.com/300" },
    { id: 2, title: "Montanhas", price: "R$ 200,00", image: "https://via.placeholder.com/300" },
    { id: 3, title: "Cidade Noturna", price: "R$ 180,00", image: "https://via.placeholder.com/300" },
  ]);

  return (
    <div className="min-h-screen bg-[#D2B48C]">
      {/* Header */}
      <header className="bg-[#8B4513] shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Arte em Quadros</h1>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-4">
            <li><Link to="/home" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to="/sobre" className="text-white hover:text-gray-300">Sobre</Link></li>
            <li><Link to="/contato" className="text-white hover:text-gray-300">Contato</Link></li>
          </ul>
          <Link to="/login" className="ml-4 bg-white text-[#8B4513] py-2 px-4 rounded hover:bg-gray-200">Login</Link>
        </nav>
      </header>
      
      {/* Banner */}
      <section className="bg-[#A0522D] text-white text-center p-16">
        <h2 className="text-4xl font-bold">Transforme Seu Espaço com Arte</h2>
        <p className="mt-4">Encontre quadros incríveis para decorar seu ambiente</p>
      </section>
      
      {/* Produtos */}
      <section className="p-8">
        <h3 className="text-3xl font-bold text-center mb-6 text-[#8B4513]">Destaques</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quadros.map((quadro) => (
            <div key={quadro.id} className="bg-white shadow-lg p-4 rounded-lg">
              <img src={quadro.image} alt={quadro.title} className="w-full h-48 object-cover rounded-md" />
              <h4 className="text-xl font-semibold mt-4 text-[#8B4513]">{quadro.title}</h4>
              <p className="text-gray-600">{quadro.price}</p>
              <button className="mt-4 bg-[#8B4513] text-white py-2 px-4 rounded hover:bg-[#A0522D] w-full">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
