import logoCircle from '../assets/aji-logo-circle-animated.svg';

const Footer = () => {
  return (
    <footer className="bg-industrial-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-6 mb-8">
              {/* Contenedor más robusto para el logo circular */}
              <div className="w-24 h-24 flex items-center justify-center bg-industrial-900 border border-slate-800 p-2 overflow-hidden shadow-2xl">
                <img 
                  src={logoCircle} 
                  alt="AJI Solutions Sello" 
                  className="w-full h-full object-contain"
                  style={{ minWidth: '100%', minHeight: '100%' }} /* Forzamos visualización */
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none">
                  AJI <span className="text-trust-500">SOLUTIONS</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500 tracking-[0.25em] uppercase leading-tight mt-2">
                  Industrial Systems SpA
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              Ingeniería de software y consultoría tecnológica de grado industrial para sectores mineros y empresariales. Soluciones diseñadas para la precisión operativa.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-6 font-mono">Infraestructura</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">SEW Digital Integrity</a></li>
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">Enterprise Transaction Engine</a></li>
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">Reloj Control Pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-6 font-mono">Agencia</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#servicios" className="hover:text-trust-500 transition-colors">Consultoría Cloud</a></li>
              <li><a href="#servicios" className="hover:text-trust-500 transition-colors">Integraciones</a></li>
              <li><a href="#contacto" className="hover:text-trust-500 transition-colors">contacto@ajisolutionsspa.cl</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} AJI Solutions SpA. All Rights Reserved. Precision Engineered in Chile.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Legal</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
