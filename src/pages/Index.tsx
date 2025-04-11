
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import Process from "@/components/Process";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <section id="problema" className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">¿Por qué la gente no está vendiendo?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-lg border-2 border-pink-200 bg-white">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">¿Qué error comete el 90% de las marcas?</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>No tienes tráfico constante.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>No sabes qué contenido funciona.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>No respondes rápido.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>No gestionas tus leads.</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 shadow-lg border-2 border-blue-200 bg-white">
              <h3 className="text-xl font-semibold text-blue-500 mb-3">¿Te suena? Respira... para eso existe El Pautero.</h3>
              <p className="mb-4">
                El problema no es tu producto, es tu sistema de ventas. En El Pautero creamos sistemas que venden por ti.
              </p>
              <div className="text-center mt-6">
                <a 
                  href="#contacto" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1"
                >
                  Quiero vender más
                </a>
              </div>
            </Card>
          </div>
        </section>

        <section id="servicios" className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">¿Qué hacemos por ti?</h2>
          <p className="text-xl text-gray-700">Con El Pautero te armamos un sistema que vende solo:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Tráfico Pago" 
              description="Estrategias de publicidad en Meta, TikTok y Google" 
              iconColor="text-pink-500"
            />
            <ServiceCard 
              title="Videos que venden" 
              description="Contenido optimizado para conversiones" 
              iconColor="text-purple-500"
            />
            <ServiceCard 
              title="Página Web optimizada" 
              description="Diseñada para convertir visitantes en clientes" 
              iconColor="text-blue-400"
            />
            <ServiceCard 
              title="Automatizaciones de ventas" 
              description="Respuestas automáticas y seguimiento" 
              iconColor="text-pink-500"
            />
            <ServiceCard 
              title="CRM para gestionar todo" 
              description="Control total de tus leads y clientes" 
              iconColor="text-purple-500"
            />
          </div>
          
          <div className="pt-8">
            <a 
              href="#contacto" 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-400 hover:from-purple-500 hover:to-blue-300 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1"
            >
              Cotiza tu plan
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-200 mt-8">
            <p className="text-lg font-medium">
              "Más de 10 proyectos operados en stealth mode"
            </p>
            <p className="text-purple-600 font-semibold mt-2">
              Creador de sistemas de ventas para negocios en LATAM
            </p>
          </div>
        </section>

        <Process />
        
        <FAQ />
        
        <section id="contacto" className="text-center space-y-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">¿Listo para empezar a vender más?</h2>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl border-2 border-pink-200">
            <p className="mb-6 text-gray-700">
              Agenda tu diagnóstico gratuito y comienza a transformar tu negocio hoy mismo.
            </p>
            <a 
              href="https://wa.me/123456789" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold py-4 rounded-lg shadow-lg transition-all hover:-translate-y-1 mb-4"
            >
              Quiero vender más con El Pautero
            </a>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                WhatsApp
              </a>
              <a href="https://calendly.com/elpautero" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                Calendly
              </a>
              <a href="mailto:info@elpautero.com" className="text-blue-500 hover:text-blue-600">
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
