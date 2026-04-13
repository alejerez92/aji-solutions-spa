import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-trust-500" />
              <span className="text-xl font-bold tracking-tight">
                AJI <span className="text-trust-500">Solutions</span> SpA
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Ingeniería de software y consultoría tecnológica de grado industrial. Transformamos la complejidad operativa en eficiencia digital.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-100 mb-6">Soluciones</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">SEW Digital Integrity</a></li>
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">Flujo App</a></li>
              <li><a href="#soluciones" className="hover:text-trust-500 transition-colors">Reloj Control Pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 mb-6">Agencia</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#servicios" className="hover:text-trust-500 transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-trust-500 transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-trust-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} AJI Solutions SpA. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
