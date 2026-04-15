import logo from '../assets/aji-logo-animated.svg';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-industrial-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center group">
            <div className="transition-transform group-hover:scale-105">
              <img 
                src={logo} 
                alt="AJI Solutions" 
                className="h-16 w-auto object-contain" /* Altura optimizada para el Navbar */
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#soluciones" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-trust-500 transition-colors">Soluciones</a>
            <a href="#servicios" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-trust-500 transition-colors">Servicios</a>
            <a href="#nosotros" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-trust-500 transition-colors">Nosotros</a>
            <a 
              href="#contacto" 
              className="bg-transparent border-2 border-trust-500/50 hover:bg-trust-500 text-trust-500 hover:text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all"
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
