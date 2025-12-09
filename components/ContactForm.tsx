"use client";

import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [info, setInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setInfo(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, empresa, mensaje }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setInfo("✅ ¡Gracias! Tu mensaje se envió correctamente.");
      setNombre("");
      setCorreo("");
      setEmpresa("");
      setMensaje("");
    } catch (err) {
      console.error(err);
      setError(
        "❌ Ocurrió un problema al enviar tu mensaje. Por favor, inténtalo de nuevo."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
    >
      <div>
        <label className="text-sm text-slate-200">Nombre completo</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="text-sm text-slate-200">Correo electrónico</label>
        <input
          type="email"
          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          placeholder="tucorreo@empresa.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="text-sm text-slate-200">Empresa / laboratorio</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          placeholder="Nombre de tu empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm text-slate-200">Mensaje</label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
          placeholder="Cuéntame brevemente qué necesitas controlar con SmartGage…"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
      </div>

      {info && <p className="text-xs text-emerald-400">{info}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {enviando ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="text-xs text-slate-400">
        ¡Gracias por tu interés! Te responderé lo antes posible.
      </p>
    </form>
  );
}