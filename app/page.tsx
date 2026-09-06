"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const sections = {
  queEs: "que-es-smartgage",
  funciones: "funciones-principales",
  capturas: "capturas-de-pantalla",
  planes: "planes-y-precios",
  contacto: "contacto",
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Image
              src="/logo-smartgage-dark.png"
              alt="SmartGage - Metrology Management"
              width={240}
              height={64}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href={`#${sections.queEs}`} className="hover:text-cyan-300">
              Qué es
            </a>
            <a
              href={`#${sections.funciones}`}
              className="hover:text-cyan-300"
            >
              Funciones
            </a>
            <a
              href={`#${sections.capturas}`}
              className="hover:text-cyan-300"
            >
              Capturas
            </a>
            <a href={`#${sections.planes}`} className="hover:text-cyan-300">
              Planes
            </a>
            <a
              href={`#${sections.contacto}`}
              className="hover:text-cyan-300"
            >
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300 md:hidden"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <span className="text-xl leading-none">×</span>
              ) : (
                <span className="text-xl leading-none">☰</span>
              )}
            </button>

            <Link
              href="https://app.smartgage.com.mx/login"
              className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
            >
              Iniciar sesión
            </Link>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
              <a
                href={`#${sections.queEs}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-300"
              >
                Qué es
              </a>

              <a
                href={`#${sections.funciones}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-300"
              >
                Funciones
              </a>

              <a
                href={`#${sections.capturas}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-300"
              >
                Capturas
              </a>

              <a
                href={`#${sections.planes}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-300"
              >
                Planes
              </a>

              <a
                href={`#${sections.contacto}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-300"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero / Qué es SmartGage */}
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 md:pt-16">
        <section
          id={sections.queEs}
          className="relative grid gap-10 pb-20 md:grid-cols-2 md:items-center"
        >
          {/* Glow de fondo */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
              Gestión metrológica en un solo lugar
            </span>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-5xl">
              Administra tus instrumentos de medición
              <span className="block text-cyan-300">
                sin hojas de cálculo ni estrés.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Centraliza tu matriz de instrumentos, controla fechas de calibración,
              identifica vencimientos y mantén la trazabilidad de tus equipos desde
              una plataforma diseñada para la gestión metrológica.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="#contacto"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300"
              >
                Solicita una demo
              </Link>
              <Link
                href="https://app.smartgage.com.mx/login"
                className="text-sm font-medium text-slate-200 hover:text-cyan-300"
              >
                Iniciar sesión →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-400 md:text-sm">
              <div>
                <p className="font-semibold text-slate-200">
                  Pensado para responsables de metrólogía
                </p>
                <p>Fechas de calibración, matrices, historial y alertas.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  Listo para múltiples empresas
                </p>
                <p>Separación por cliente, usuarios y roles.</p>
              </div>
            </div>
          </div>

          {/* Panel tipo "mockup" de la app */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4 shadow-2xl shadow-cyan-500/10">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Matriz de instrumentos
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
                <span>Instrumentos activos</span>
                <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[11px] text-cyan-200">
                  Alertas de calibración
                </span>
              </div>

              <div className="divide-y divide-slate-800 text-xs md:text-sm">
                {[
                  {
                    nombre: "Calibrador Vernier 0–150 mm",
                    id: "INS-001",
                    estado: "Vigente",
                    color: "text-emerald-400",
                  },
                  {
                    nombre: "Micrómetro 0–25 mm",
                    id: "INS-014",
                    estado: "Por vencer",
                    color: "text-amber-300",
                  },
                  {
                    nombre: "Manómetro 0–10 bar",
                    id: "INS-032",
                    estado: "Vencido",
                    color: "text-red-400",
                  },
                ].map((i) => (
                  <div
                    key={i.id}
                    className="flex items-center justify-between px-4 py-2.5"
                  >
                    <div>
                      <p className="font-medium text-slate-100">{i.nombre}</p>
                      <p className="text-[11px] text-slate-400">{i.id}</p>
                    </div>
                    <span
                      className={`rounded-full border border-slate-700 px-2 py-1 text-[11px] ${i.color}`}
                    >
                      {i.estado}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Visualiza el estado de tus instrumentos, fechas de vencimiento y
              alertas de calibración en un solo lugar.
            </p>
          </div>
        </section>

        {/* Funciones principales */}
        <section
          id={sections.funciones}
          className="space-y-8 border-t border-slate-800 py-16"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Control metrológico
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Lo esencial para mantener tus instrumentos bajo control
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
              Centraliza la información que normalmente termina dispersa entre hojas
              de cálculo, calendarios y registros independientes. SmartGage te ayuda
              a saber qué tienes, qué requiere atención y qué ha cambiado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Matriz de instrumentos"
              description="Mantén en un solo lugar la identificación, ubicación, marca, modelo, rango, estado y datos de calibración de cada instrumento."
            />

            <FeatureCard
              title="Calendario de calibraciones"
              description="Visualiza próximas fechas de calibración y detecta con anticipación los instrumentos que requieren atención."
            />

            <FeatureCard
              title="Estados y vencimientos"
              description="Identifica rápidamente instrumentos vigentes, próximos a vencer o vencidos para priorizar acciones antes de que se conviertan en un problema."
            />

            <FeatureCard
              title="Historial y trazabilidad"
              description="Conserva evidencia de cambios y movimientos para facilitar el seguimiento interno y la preparación ante auditorías."
            />

            <FeatureCard
              title="Multiempresa y roles"
              description="Separa la información por empresa y controla el acceso de administradores y usuarios sin mezclar instrumentos entre organizaciones."
            />

            <FeatureCard
              title="Exportación a Excel"
              description="Exporta tu matriz cuando necesites trabajar, respaldar o compartir información fuera de SmartGage."
            />
          </div>

        </section>

        {/* Capturas de pantalla */}
        <section
          id={sections.capturas}
          className="space-y-8 border-t border-slate-800 py-16"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Interfaz real
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              SmartGage en acción
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
              Consulta tu matriz de instrumentos y visualiza próximas calibraciones
              desde una interfaz clara, diseñada para encontrar rápidamente la
              información que necesita atención.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 justify-center">
            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <Image
                  src="/matriz-2026.png"
                  alt="Matriz de instrumentos"
                  width={1200}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="text-xs font-medium text-slate-200 md:text-sm">
                Matriz de instrumentos
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <Image
                  src="/calendario-2026.png"
                  alt="Calendario de calibraciones"
                  width={1200}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="text-xs font-medium text-slate-200 md:text-sm">
                Calendario de calibraciones
              </p>
            </div>
          </div>
        </section>

        {/* Planes y precios */}
        <section
          id={sections.planes}
          className="space-y-8 border-t border-slate-800 py-16"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Empieza con SmartGage
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Elige la forma de comenzar
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
              Prueba SmartGage en un entorno real y elige la opción que mejor se adapte
              al tamaño y necesidades de tu organización.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PlanCard
              name="Prueba piloto"
              price="Conoce SmartGage"
              description="Evalúa SmartGage con tus propios instrumentos y comprueba cómo puede ayudarte en tu operación diaria."
              features={[
                "Configuración inicial acompañada",
                "Matriz de instrumentos",
                "Calendario de calibraciones",
                "Seguimiento durante la prueba",
              ]}
              ctaLabel="Solicitar prueba"
              highlight={false}
            />

            <PlanCard
              name="SmartGage Pro"
              price="Para tu operación"
              description="La opción principal para empresas que necesitan mantener sus instrumentos, calibraciones y trazabilidad bajo control."
              features={[
                "Gestión de instrumentos",
                "Estados y vencimientos",
                "Historial y trazabilidad",
                "Usuarios, roles y exportación a Excel",
              ]}
              ctaLabel="Solicitar información"
              highlight={true}
            />

            <PlanCard
              name="Enterprise"
              price="A medida"
              description="Para organizaciones con múltiples empresas, usuarios o necesidades de gestión más específicas."
              features={[
                "Gestión multiempresa",
                "Administración de usuarios y roles",
                "Acompañamiento en implementación",
                "Evaluación de requerimientos especiales",
              ]}
              ctaLabel="Hablar sobre Enterprise"
              highlight={false}
            />
          </div>
        </section>

        {/* Contacto */}
        <section
          id={sections.contacto}
          className="space-y-8 border-t border-slate-800 py-16"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Hablemos
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Lleva SmartGage a tu operación
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
              Cuéntanos cómo gestionas actualmente tus instrumentos de medición y
              revisamos juntos cómo SmartGage puede ayudarte a simplificar el control
              de calibraciones, vencimientos y trazabilidad.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <ContactForm />

            <div className="space-y-5 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Contacto directo
                </p>

                <p className="mt-3 text-base font-medium text-slate-100">
                  ventas@smartgage.com.mx
                </p>

                <p className="mt-2 leading-6 text-slate-400">
                  Podemos revisar tu operación actual, número de instrumentos y forma de
                  trabajo para definir la mejor manera de comenzar.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-5">
                <p className="font-medium text-slate-100">
                  ¿Quieres empezar con una prueba piloto?
                </p>

                <p className="mt-2 leading-6 text-slate-400">
                  Utiliza tus propios instrumentos y evalúa SmartGage en un escenario
                  cercano a tu operación real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer simple */}
        <footer className="border-t border-slate-800 pt-8 text-xs text-slate-500">
          <div className="flex flex-col items-center justify-between gap-3 pb-6 md:flex-row">
            <p>© {new Date().getFullYear()} SmartGage. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#que-es-smartgage" className="hover:text-cyan-300">
                Inicio
              </a>
              <Link
                href="https://app.smartgage.com.mx/login"
                className="hover:text-cyan-300"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// COMPONENTES AUXILIARES

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900/70">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-cyan-400/70 opacity-0 transition group-hover:opacity-100" />

      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
      </div>

      <h3 className="text-base font-semibold text-slate-50">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        {description}
      </p>
    </div>
  );
}

function PlanCard({
  name,
  price,
  description,
  features,
  ctaLabel,
  highlight,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-5 ${
        highlight
          ? "border-cyan-400/70 bg-slate-900/60 shadow-xl shadow-cyan-500/20"
          : "border-slate-800 bg-slate-900/40"
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {name}
      </span>
      <p className="mt-2 text-lg font-semibold text-slate-50">{price}</p>
      <p className="mt-2 text-xs text-slate-300 md:text-sm">{description}</p>

      <ul className="mt-4 space-y-2 text-xs text-slate-300 md:text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <a
          href="#contacto"
          className={`block w-full rounded-xl px-4 py-2 text-center text-xs font-semibold transition md:text-sm ${
            highlight
              ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300"
              : "border border-cyan-400/60 text-cyan-200 hover:bg-cyan-500/10"
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
