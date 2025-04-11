
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/cfa35434-bc2c-4580-9c4a-41229860f301.png" 
              alt="El Pautero Logo" 
              className="h-16" 
            />
            <p className="mt-2 text-sm text-gray-300">
              Creadores de sistemas de ventas para negocios en LATAM
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-pink-300">Servicios</h3>
              <ul className="space-y-1">
                <li><a href="#servicios" className="hover:text-pink-300 transition-colors">Tráfico Pago</a></li>
                <li><a href="#servicios" className="hover:text-pink-300 transition-colors">Videos que venden</a></li>
                <li><a href="#servicios" className="hover:text-pink-300 transition-colors">Página Web</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-300">Contacto</h3>
              <ul className="space-y-1">
                <li><a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">WhatsApp</a></li>
                <li><a href="https://calendly.com/elpautero" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Calendly</a></li>
                <li><a href="mailto:info@elpautero.com" className="hover:text-blue-300 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 El Pautero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
