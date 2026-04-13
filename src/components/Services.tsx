import { motion } from 'framer-motion';
import { Code2, CloudCog, Share2, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Desarrollo a Medida",
    description: "Arquitectura de software escalable adaptada a los procesos únicos de tu operación industrial.",
    icon: Code2
  },
  {
    title: "Consultoría Cloud",
    description: "Migración y optimización de infraestructuras en AWS/Azure con enfoque en alta disponibilidad.",
    icon: CloudCog
  },
  {
    title: "Integración de Sistemas",
    description: "Conectamos sistemas legados con APIs modernas para un flujo de datos unificado y eficiente.",
    icon: Share2
  },
  {
    title: "Seguridad de Datos",
    description: "Implementación de protocolos de encriptación y auditorías para proteger información crítica.",
    icon: ShieldCheck
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Servicios Tecnológicos de Alto Impacto</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Acompañamos a las empresas en su proceso de digitalización con soluciones robustas y soporte técnico de grado industrial.
            </p>
          </div>
          <div className="flex gap-4">
            {/* Tech logos placeholder/icons could go here */}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-industrial-900/40 border border-slate-800/60 backdrop-blur-sm hover:bg-industrial-900/60 transition-all group"
            >
              <service.icon className="w-10 h-10 text-trust-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
