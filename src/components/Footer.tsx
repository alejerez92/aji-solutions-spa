import logo from '../assets/aji-solutions-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-industrial-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="AJI Solutions Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter leading-none">
                  AJI <span className="text-trust-500">SOLUTIONS</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase leading-tight mt-1">
                  Industrial Systems SpA
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              Ingeniería de software y consultoría tecnológica de grado industrial para sectores mineros y empresariales.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-6">Sistemas</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">SEW Digital Integrity</a></li>
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">Enterprise Transaction Engine</a></li>
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">Reloj Control Pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-6">Agencia</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#servicios" className="hover:text-trust-500 transition-colors">Consultoría Cloud</a></li>
              <li><a href="#servicios" className="hover:text-trust-500 transition-colors">Integraciones</a></li>
              <li><a href="#contacto" className="hover:text-trust-500 transition-colors">contacto@ajisolutionsspa.cl</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} AJI Solutions SpA. Precision Engineered.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Legal</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
