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

    // 1. Envío de notificación interna (Para Alejandro/Ventas)
    await resend.emails.send({
      from: 'Sistema AJI <notificaciones@ajisolutionsspa.cl>',
      to: ['contacto@ajisolutionsspa.cl'],
      subject: `[NUEVA SOLICITUD] ${service} - ${company}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 40px; border-radius: 8px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 30px;">Notificación de Prospecto B2B</h2>
          <p>Se ha recibido una nueva consulta técnica a través del portal web.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase;">Cliente:</td><td style="font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase;">Empresa:</td><td style="font-weight: bold;">${company}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase;">Email:</td><td style="color: #2563eb;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase;">Servicio:</td><td>${service}</td></tr>
          </table>
          <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 4px; border-left: 4px solid #cbd5e1;">
            <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 10px;">Mensaje:</p>
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    // 2. Envío de confirmación automática (Para el Cliente)
    const confirmation = await resend.emails.send({
      from: 'AJI Solutions <contacto@ajisolutionsspa.cl>',
      to: [email],
      subject: `Confirmación de Recepción - AJI Solutions SpA`,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 40px; border-radius: 8px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0b0f1a; margin: 0; font-size: 24px;">AJI <span style="color: #2563eb;">SOLUTIONS</span></h1>
            <p style="font-size: 10px; color: #64748b; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px;">Industrial Systems SpA</p>
          </div>
          
          <p>Estimado/a <strong>${name}</strong>,</p>
          <p>Hemos recibido correctamente su solicitud de información respecto a <strong>${service}</strong> para la empresa <strong>${company}</strong>.</p>
          <p>Un arquitecto de soluciones de nuestro equipo técnico revisará los detalles de su requerimiento y se pondrá en contacto con usted en un plazo máximo de 24 horas hábiles.</p>
          
          <div style="margin: 40px 0; padding: 20px; border: 1px solid #e2e8f0; border-radius: 4px; background-color: #f8fafc; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #64748b;">Si su requerimiento es de carácter urgente, puede contactarnos directamente a:</p>
            <p style="margin: 10px 0 0 0; font-weight: bold; color: #2563eb;">ventas@ajisolutionsspa.cl</p>
          </div>

          <p style="font-size: 14px; line-height: 1.6;">Atentamente,<br /><strong>Equipo de Ingeniería</strong><br />AJI Solutions SpA</p>
          
          <hr style="margin: 40px 0; border: 0; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center;">
            Este es un mensaje automático. No es necesario responder a esta dirección.<br />
            © ${new Date().getFullYear()} AJI Solutions SpA. Chile.
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify(confirmation), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error en la transmisión de datos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
