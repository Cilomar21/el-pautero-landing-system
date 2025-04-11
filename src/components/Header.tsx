
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/cfa35434-bc2c-4580-9c4a-41229860f301.png" 
            alt="El Pautero Logo" 
            className="h-16 md:h-20" 
          />
        </Link>
        <div>
          <a 
            href="#contacto" 
            className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold hover:bg-pink-100 transition-colors shadow-lg"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
