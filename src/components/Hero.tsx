
const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          El problema no es tu producto, es tu sistema de ventas.
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Hola, soy Juan Camilo de El Pautero...
        </p>
        
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            ¿Por qué la mayoría de negocios no venden online?
          </h2>
          <p className="text-lg mb-4">
            Porque no tienen un sistema que haga esto:
          </p>
          <ul className="space-y-3 text-left max-w-md mx-auto mb-6">
            <li className="flex items-center">
              <span className="text-pink-300 mr-2 text-xl">•</span>
              <span>Traer tráfico</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink-300 mr-2 text-xl">•</span>
              <span>Crear contenido</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink-300 mr-2 text-xl">•</span>
              <span>Captar leads</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink-300 mr-2 text-xl">•</span>
              <span>Automatizar respuestas</span>
            </li>
            <li className="flex items-center">
              <span className="text-pink-300 mr-2 text-xl">•</span>
              <span>Gestionar clientes</span>
            </li>
          </ul>
          
          <p className="text-xl font-medium">
            En El Pautero te armamos eso.
          </p>
          <p className="mt-4">
            Si quieres dejar de vender por suerte y empezar a vender por sistema...
          </p>
          <div className="mt-6">
            <a 
              href="#contacto" 
              className="inline-block bg-white text-pink-600 hover:bg-pink-100 transition-colors px-8 py-3 rounded-full font-bold shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
            >
              → Quiero vender más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
