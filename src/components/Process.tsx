
import { Card } from "@/components/ui/card";

const Process = () => {
  return (
    <section id="proceso" className="text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800">¿Cómo funciona trabajar con El Pautero?</h2>
      <p className="text-xl text-gray-700">Pasos simples:</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 shadow-lg bg-white border-2 border-pink-200">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
            1
          </div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Agenda tu llamada</h3>
          <p className="text-gray-600">El primer paso para transformar tu negocio</p>
        </Card>
        
        <Card className="p-6 shadow-lg bg-white border-2 border-purple-200">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
            2
          </div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Diagnóstico sin costo</h3>
          <p className="text-gray-600">Evaluamos tu situación actual</p>
        </Card>
        
        <Card className="p-6 shadow-lg bg-white border-2 border-blue-200">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
            3
          </div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Creamos tu sistema</h3>
          <p className="text-gray-600">Implementamos la solución personalizada</p>
        </Card>
        
        <Card className="p-6 shadow-lg bg-white border-2 border-pink-200">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
            4
          </div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Empezamos a vender</h3>
          <p className="text-gray-600">Tu negocio crece con nuestro apoyo</p>
        </Card>
      </div>
    </section>
  );
};

export default Process;
