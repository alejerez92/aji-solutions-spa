import { motion } from 'framer-motion';
import { Mail, Building2, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-industrial-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Inicia tu Transformación Digital Hoy</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Déjanos tus datos y un arquitecto de soluciones se pondrá en contacto contigo a la brevedad para entender los desafíos de tu empresa.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-industrial-900 border border-slate-800">
                <div className="w-12 h-12 bg-trust-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-trust-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Correo Electrónico</h4>
                  <p className="text-slate-400 text-sm">contacto@ajisolutionsspa.cl</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-industrial-900 border border-slate-800">
                <div className="w-12 h-12 bg-trust-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-trust-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Ubicación</h4>
                  <p className="text-slate-400 text-sm">Chile - Cobertura Industrial & Minera</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-500/5"
          >
            <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-industrial-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 focus:ring-1 focus:ring-trust-500 transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Empresa</label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full bg-industrial-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 focus:ring-1 focus:ring-trust-500 transition-all"
                    placeholder="Ej. Minera S.A."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Correo Corporativo</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-industrial-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 focus:ring-1 focus:ring-trust-500 transition-all"
                  placeholder="juan@empresa.cl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Servicio de Interés</label>
                <select
                  name="service"
                  className="w-full bg-industrial-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 focus:ring-1 focus:ring-trust-500 transition-all"
                >
                  <option value="desarrollo">Desarrollo a Medida</option>
                  <option value="cloud">Consultoría Cloud</option>
                  <option value="integracion">Integración de Sistemas</option>
                  <option value="seguridad">Seguridad de Datos</option>
                  <option value="otro">Otro Proyecto</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Mensaje / Detalles del Proyecto</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-industrial-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 focus:ring-1 focus:ring-trust-500 transition-all resize-none"
                  placeholder="Describa brevemente su requerimiento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-trust-500 hover:bg-trust-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-trust-500/25 flex items-center justify-center gap-2 group"
              >
                Enviar Solicitud
                <span className="sr-only">Enviar</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
