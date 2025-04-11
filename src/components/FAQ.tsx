
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800">Preguntas Frecuentes</h2>
      
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="text-left">
          <AccordionItem value="item-1" className="border border-purple-200 mb-4 rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-purple-50 rounded-t-lg">
              <span className="text-purple-700 font-medium">¿Cuánto cuesta?</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3 pt-1">
              Ofrecemos diferentes planes adaptados a las necesidades de tu negocio. En la consulta gratuita evaluamos tu situación y te ofrecemos la solución más adecuada con precios transparentes.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-pink-200 mb-4 rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-pink-50 rounded-t-lg">
              <span className="text-pink-600 font-medium">¿Qué pasa si no vendo?</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3 pt-1">
              Nuestro sistema está diseñado para maximizar tus ventas. Trabajamos con métricas claras y hacemos ajustes continuos para garantizar resultados. Si algo no está funcionando, lo modificamos hasta que funcione.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-blue-200 mb-4 rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-blue-50 rounded-t-lg">
              <span className="text-blue-500 font-medium">¿Cuánto tiempo toma?</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3 pt-1">
              La implementación inicial del sistema toma aproximadamente 2-3 semanas. Comenzarás a ver resultados durante el primer mes, con mejoras continuas conforme optimizamos el sistema.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-purple-200 rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-purple-50 rounded-t-lg">
              <span className="text-purple-700 font-medium">¿Puedo pagar por partes?</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3 pt-1">
              Sí, ofrecemos planes de pago flexibles para facilitar tu inversión en el sistema de ventas. Podemos discutir las opciones que mejor se adapten a tu flujo de caja durante la consulta.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
