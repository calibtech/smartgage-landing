import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nombre, correo, empresa, mensaje } = await request.json();

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      subject: "Nuevo mensaje desde SmartGage Landing Page",
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Empresa:</b> ${empresa || "No indicado"}</p>
        <p><b>Mensaje:</b><br>${mensaje.replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: correo,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("ERROR SEND EMAIL:", error);
    return NextResponse.json(
      { ok: false, error: "Error enviando correo" },
      { status: 500 }
    );
  }
}