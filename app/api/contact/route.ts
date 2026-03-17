import { transporter } from "@/lib/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 },
      );
    }

    await transporter.sendMail({
      from: `"Lucida LP" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `[LP-CONTACT] Nova mensagem de ${name}`,
      text: `
[LP-CONTACT] Nova mensagem de contato

Nome: ${name}
Email: ${email}
Telefone: ${phone}

Mensagem:
${message}
      `.trim(),
      html: `
<h2>[LP-CONTACT] Nova mensagem de contato</h2>
<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
  <tr>
    <td style="font-weight:bold;padding-right:12px;">Nome</td>
    <td>${name}</td>
  </tr>
  <tr>
    <td style="font-weight:bold;padding-right:12px;">Email</td>
    <td><a href="mailto:${email}">${email}</a></td>
  </tr>
  <tr>
    <td style="font-weight:bold;padding-right:12px;">Telefone</td>
    <td>${phone}</td>
  </tr>
</table>
<br/>
<p style="font-weight:bold;font-family:sans-serif;font-size:14px;">Mensagem:</p>
<p style="font-family:sans-serif;font-size:14px;white-space:pre-line;">${message}</p>
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LP-CONTACT] Erro ao enviar email:", err);
    return NextResponse.json(
      { error: "Falha ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 },
    );
  }
}
