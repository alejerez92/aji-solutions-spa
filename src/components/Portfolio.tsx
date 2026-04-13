import { motion } from 'framer-motion';
import { QrCode, Database, Clock, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: "SEW Digital Integrity",
    description: "Trazabilidad de ciclo de vida completo para activos críticos industriales. Auditoría mediante códigos QR encriptados con sincronización Cloud redundante y reportes de estado en tiempo real.",
    icon: QrCode,
    tags: ["Integridad de Datos", "QR Industrial", "Cloud Audit"]
  },
  {
    title: "Enterprise Transaction Engine",
    description: "Gestión avanzada de transacciones empresariales. Motor de control financiero diseñado para la precisión operativa, consolidación de flujos de caja y trazabilidad total de auditoría financiera.",
    icon: Database,
    tags: ["ERP Core", "Finanzas B2B", "Auditoría"]
  },
  {
    title: "Reloj Control Pro",
    description: "Sistema de gestión de asistencia de alta precisión para faenas. Validación geoposicionada, control de turnos complejos y reportes automáticos certificados para cumplimiento normativo.",
    icon: Clock,
    tags: ["HR Compliance", "GPS Faena", "Mobile Control"]
  }
];

const Portfolio = () => {
  return (
    <section id="soluciones" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-trust-500 font-mono text-sm tracking-widest uppercase mb-4 block">Nuestra Vitrina de Ingeniería</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sistemas Críticos de Operación</h2>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Plataformas robustas diseñadas para gestionar procesos de alta complejidad con precisión absoluta y seguridad de datos corporativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 rounded-none bg-industrial-900/60 border border-slate-800 hover:border-trust-500/50 transition-all shadow-lg"
            >
              <div className="w-16 h-16 bg-trust-500/5 border border-trust-500/20 flex items-center justify-center mb-8 group-hover:bg-trust-500/10 transition-colors">
                <item.icon className="w-8 h-8 text-trust-500" />
              </div>
              <h3 className="text-xl font-bold mb-5 tracking-tight group-hover:text-trust-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm h-24">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-mono font-medium rounded-none bg-slate-950 text-slate-500 border border-slate-800 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center gap-2 text-trust-500 font-bold text-sm hover:gap-4 transition-all uppercase tracking-widest">
                Especificaciones Técnicas
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
