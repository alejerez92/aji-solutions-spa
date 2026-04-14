import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, company, email, service, message } = await req.json();

    const data = await resend.emails.send({
      from: 'AJI Solutions <notificaciones@ajisolutionsspa.cl>',
      to: ['contacto@ajisolutionsspa.cl'],
      subject: `[CONSULTA TÉCNICA] ${service} - ${company}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 40px; border-radius: 8px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 30px;">Nueva Solicitud de Proyecto Industrial</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold;">Nombre del Cliente:</td>
              <td style="padding: 10px 0; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold;">Empresa / Organización:</td>
              <td style="padding: 10px 0; font-weight: bold;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold;">Email de Contacto:</td>
              <td style="padding: 10px 0; color: #2563eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold;">Servicio Requerido:</td>
              <td style="padding: 10px 0;"><span style="background: #eff6ff; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${service}</span></td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 4px; border-left: 4px solid #cbd5e1;">
            <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold; margin-bottom: 10px;">Detalles Técnicos:</p>
            <p style="margin: 0; line-height: 1.6; color: #334155;">${message}</p>
          </div>

          <hr style="margin: 40px 0; border: 0; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center;">
            Este es un mensaje automático generado por el sistema de contacto de <strong>ajisolutionsspa.cl</strong>.<br />
            Para responder, simplemente responda a este correo (el campo Reply-To está configurado al cliente).
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Fallo al enviar el correo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
