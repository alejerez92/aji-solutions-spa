import logo from '../assets/aji-solutions-logo.svg';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-industrial-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center"> {/* Aumenté un poco más la altura del nav */}
          <div className="flex items-center gap-6 group">
            {/* Eliminamos el contenedor cuadrado y dejamos que el logo respire */}
            <div className="transition-transform group-hover:scale-105">
              <img 
                src={logo} 
                alt="AJI Solutions Logo" 
                className="h-20 w-auto object-contain" /* Altura fija de 80px, ancho libre */
              />
            </div>
            
            {/* Si tu logo ya tiene el nombre, este bloque de abajo se puede borrar para que no se repita */}
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none">
                AJI <span className="text-trust-500">SOLUTIONS</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500 tracking-[0.25em] uppercase leading-tight mt-2">
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
              className="bg-transparent border-2 border-trust-500 hover:bg-trust-500 text-trust-500 hover:text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all"
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
