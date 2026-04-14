import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Building2, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-industrial-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">Inicia tu Transformación Digital Hoy</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Déjanos tus datos y un arquitecto de soluciones se pondrá en contacto contigo a la brevedad para entender los desafíos de tu empresa.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-none bg-industrial-900/40 border border-slate-800">
                <div className="w-12 h-12 bg-trust-500/10 rounded-none border border-trust-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-trust-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm uppercase tracking-widest">Correo Electrónico</h4>
                  <p className="text-slate-400 text-sm mt-1">contacto@ajisolutionsspa.cl</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-none bg-industrial-900/40 border border-slate-800">
                <div className="w-12 h-12 bg-trust-500/10 rounded-none border border-trust-500/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-trust-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm uppercase tracking-widest">Ubicación</h4>
                  <p className="text-slate-400 text-sm mt-1">Chile - Cobertura Industrial & Minera</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-none bg-slate-900/40 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                <h3 className="text-2xl font-bold">Solicitud Enviada</h3>
                <p className="text-slate-400">Gracias, Alejandro. Un arquitecto revisará tu caso en las próximas horas.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-trust-500 font-bold uppercase tracking-widest text-xs mt-8"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-industrial-950 border border-slate-800 rounded-none px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 transition-all text-sm"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-industrial-950 border border-slate-800 rounded-none px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 transition-all text-sm"
                      placeholder="Ej. Minera S.A."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Correo Corporativo</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-industrial-950 border border-slate-800 rounded-none px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 transition-all text-sm"
                    placeholder="juan@empresa.cl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Servicio de Interés</label>
                  <select
                    name="service"
                    disabled={status === 'sending'}
                    className="w-full bg-industrial-950 border border-slate-800 rounded-none px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="Desarrollo a Medida">Desarrollo a Medida</option>
                    <option value="Consultoría Cloud">Consultoría Cloud</option>
                    <option value="Integración de Sistemas">Integración de Sistemas</option>
                    <option value="Seguridad de Datos">Seguridad de Datos</option>
                    <option value="Otro Proyecto">Otro Proyecto</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Mensaje / Detalles Técnicos</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    disabled={status === 'sending'}
                    className="w-full bg-industrial-950 border border-slate-800 rounded-none px-4 py-3 text-slate-100 focus:outline-none focus:border-trust-500 transition-all resize-none text-sm"
                    placeholder="Describa brevemente su requerimiento..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full font-bold py-5 rounded-none transition-all flex items-center justify-center gap-3 uppercase tracking-[0.3em] text-xs
                    ${status === 'sending' ? 'bg-slate-800 text-slate-500' : 'bg-trust-500 hover:bg-trust-600 text-white shadow-xl shadow-trust-500/20'}
                  `}
                >
                  {status === 'sending' ? 'Procesando Transmisión...' : 'Iniciar Consulta Técnica'}
                  <Send className="w-4 h-4" />
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-[10px] font-mono uppercase tracking-widest text-center mt-4">
                    Fallo en la conexión. Intente nuevamente.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
