import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-industrial-950">
      {/* Elementos técnicos de fondo */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[10%] left-[5%] w-px h-full bg-trust-500/30" />
        <div className="absolute top-[10%] left-[5%] w-20 h-px bg-trust-500/30" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-trust-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-trust-500" />
            <span className="font-mono text-xs tracking-[0.3em] text-trust-500 uppercase">
              Industrial Grade Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black leading-[1.1] mb-10 tracking-tighter"
          >
            INGENIERÍA DE SOFTWARE <br />
            <span className="text-trust-500">PARA OPERACIONES CRÍTICAS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl border-l-2 border-slate-800 pl-8"
          >
            Desarrollamos ecosistemas digitales de alta disponibilidad para los sectores minero e industrial. Soluciones de software diseñadas con rigor de ingeniería para garantizar trazabilidad, seguridad y optimización de activos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#soluciones"
              className="inline-flex items-center justify-center gap-3 bg-trust-500 hover:bg-trust-600 text-white px-10 py-5 rounded-none font-bold transition-all uppercase tracking-widest text-sm group"
            >
              Sistemas y Soluciones
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white border border-white/20 px-10 py-5 rounded-none font-bold transition-all uppercase tracking-widest text-sm"
            >
              <ShieldCheck className="w-4 h-4 text-trust-500" />
              Consulta de Ingeniería
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex gap-12 border-t border-slate-800/50 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-trust-500 font-mono text-xl font-bold">01</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Alta Disponibilidad</span>
            </div>
            <div className="flex flex-col">
              <span className="text-trust-500 font-mono text-xl font-bold">02</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Trazabilidad Total</span>
            </div>
            <div className="flex flex-col">
              <span className="text-trust-500 font-mono text-xl font-bold">03</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Seguridad Certificada</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
