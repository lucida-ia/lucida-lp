import { transporter } from "@/lib/mailer";
import { NextRequest, NextResponse } from "next/server";

const institutionTypeLabels: Record<string, string> = {
  escola: "Escola",
  cursinho: "Cursinho",
  universidade: "Universidade",
  empresa: "Empresa",
  outra: "Outra",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, instituion, type } = body;

    if (!name || !email || !phone || !message || !instituion || !type) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 },
      );
    }

    const typeLabel = institutionTypeLabels[type] ?? type;

    await transporter.sendMail({
      from: `"Lucida LP" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `[LP-INSTITUTION] Nova mensagem de ${name} — ${instituion}`,
      text: `
[LP-INSTITUTION] Nova mensagem de contato institucional

Nome: ${name}
Email: ${email}
Telefone: ${phone}
Instituição/Empresa: ${instituion}
Tipo: ${typeLabel}

Mensagem:
${message}
      `.trim(),
      html: `
<h2>[LP-INSTITUTION] Nova mensagem de contato institucional</h2>
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
  <tr>
    <td style="font-weight:bold;padding-right:12px;">Instituição/Empresa</td>
    <td>${instituion}</td>
  </tr>
  <tr>
    <td style="font-weight:bold;padding-right:12px;">Tipo</td>
    <td>${typeLabel}</td>
  </tr>
</table>
<br/>
<p style="font-weight:bold;font-family:sans-serif;font-size:14px;">Mensagem:</p>
<p style="font-family:sans-serif;font-size:14px;white-space:pre-line;">${message}</p>
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LP-INSTITUTION] Erro ao enviar email:", err);
    return NextResponse.json(
      { error: "Falha ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 },
    );
  }
}
