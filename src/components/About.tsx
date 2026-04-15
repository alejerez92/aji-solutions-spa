import { motion } from 'framer-motion';
import { Target, Users, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-32 bg-industrial-950 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-trust-500/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-trust-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Identidad Corporativa</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              INGENIERÍA QUE <br />
              <span className="text-trust-500 text-outline">IMPULSA LA INDUSTRIA.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                AJI Solutions SpA nace con una visión clara: cerrar la brecha entre la operación industrial en terreno y la inteligencia de datos de alta disponibilidad. 
              </p>
              <p>
                No somos una agencia de software convencional. Somos arquitectos de soluciones diseñadas para resistir las exigencias de entornos críticos como la minería y la logística a gran escala. 
              </p>
              <p className="border-l-2 border-trust-500 pl-6 italic">
                "Nuestra misión es transformar procesos complejos en sistemas de precisión que garanticen la trazabilidad y la seguridad operativa de nuestros clientes."
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-industrial-900/50 border border-slate-800 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-6 h-6 text-trust-500" />
                <h4 className="text-xl font-bold uppercase tracking-tight">Precisión Operativa</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cada línea de código que escribimos está orientada a eliminar el margen de error en procesos críticos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 bg-industrial-900/50 border border-slate-800 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Cpu className="w-6 h-6 text-trust-500" />
                <h4 className="text-xl font-bold uppercase tracking-tight">Tecnología de Vanguardia</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Implementamos arquitecturas modernas (Cloud, Edge, QR) que aseguran la escalabilidad de su infraestructura digital.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-8 bg-industrial-900/50 border border-slate-800 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-6 h-6 text-trust-500" />
                <h4 className="text-xl font-bold uppercase tracking-tight">Soporte Estratégico</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Acompañamos a dueños y gerentes en la toma de decisiones tecnológicas que impactan directamente en su rentabilidad.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
