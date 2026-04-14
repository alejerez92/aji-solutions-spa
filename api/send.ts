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
      from: 'Aji Solutions Web <onboarding@resend.dev>', // Por ahora Resend pide esto, luego configuramos tu dominio en su panel
      to: ['contacto@ajisolutionsspa.cl'],
      subject: `Nueva Solicitud: ${service} - ${company}`,
      replyTo: email,
      html: `
        <h2>Nueva Solicitud de Proyecto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        <hr />
        <p>Enviado desde el formulario de ajisolutionsspa.cl</p>
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
