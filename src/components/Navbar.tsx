import logo from '../assets/aji-solutions-logo.svg';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-industrial-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src={logo} alt="AJI Solutions Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">
                AJI <span className="text-trust-500">SOLUTIONS</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase leading-tight mt-1">
                Industrial Systems SpA
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#soluciones" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-trust-500 transition-colors">Soluciones</a>
            <a href="#servicios" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-trust-500 transition-colors">Servicios</a>
            <a href="#nosotros" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-trust-500 transition-colors">Nosotros</a>
            <a 
              href="#contacto" 
              className="bg-transparent border border-trust-500/50 hover:bg-trust-500 text-trust-500 hover:text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all"
            >
              Agendar Consultoría
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
