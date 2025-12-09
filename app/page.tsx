"use client";

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
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400" />
            <span className="text-lg font-semibold tracking-tight">
              SmartGage
            </span>
          </div>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href={`#${sections.queEs}`} className="hover:text-emerald-300">
              Qué es
            </a>
            <a
              href={`#${sections.funciones}`}
              className="hover:text-emerald-300"
            >
              Funciones
            </a>
            <a
              href={`#${sections.capturas}`}
              className="hover:text-emerald-300"
            >
              Capturas
            </a>
            <a href={`#${sections.planes}`} className="hover:text-emerald-300">
              Precios
            </a>
            <a
              href={`#${sections.contacto}`}
              className="hover:text-emerald-300"
            >
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://app.smartgage.com.mx/login" // ajusta cuando quieras
              className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
            >
              Iniciar sesión
            </Link>
            {/* 
            <Link
              href="https://app.smartgage.com.mx/registro" // ajusta cuando tengas ruta
              className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
            >
              Crear cuenta
            </Link>
            */}
          </div>
        </nav>
      </header>

      {/* Hero / Qué es SmartGage */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-16">
        <section
          id={sections.queEs}
          className="grid gap-10 pb-20 md:grid-cols-2 md:items-center"
        >
          <div>
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Gestión de instrumentos basada en la nube
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Administra tus instrumentos de medición
              <span className="block text-emerald-400">
                sin hojas de cálculo ni estrés.
              </span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              SmartGage es una plataforma diseñada para laboratorios y
              empresas que necesitan controlar calibraciones, verificaciones,
              vencimientos y trazabilidad de sus instrumentos de medición,
              desde cualquier lugar.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="#contacto"
                className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Solicita una demo
              </Link>
              <Link
                href="https://app.smartgage.com.mx/login"
                className="text-sm font-medium text-slate-200 hover:text-emerald-300"
              >
                Iniciar sesión →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-400 md:text-sm">
              <div>
                <p className="font-semibold text-slate-200">
                  Pensado para metrólogos
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
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4 shadow-2xl shadow-emerald-500/10">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Matriz de instrumentos
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
                <span>Instrumentos activos</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
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
                      <p className="font-medium text-slate-100">
                        {i.nombre}
                      </p>
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
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Funciones principales
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              SmartGage concentra lo que usas todos los días: matriz de
              instrumentos, agenda de calibración y trazabilidad de cambios,
              sin la complejidad de un ERP.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Matriz de instrumentos"
              description="Consulta y filtra todos tus instrumentos por nombre, identificación, ubicación, estado, fecha de calibración y más."
            />
            <FeatureCard
              title="Agenda de calibración"
              description="Visualiza en calendario qué instrumentos vencen próximamente, recibe alertas visuales y envío de recordatorios."
            />
            <FeatureCard
              title="Historial y trazabilidad"
              description="Registra cambios, ediciones y bajas de instrumentos para mantener evidencia ante auditorías."
            />
            <FeatureCard
              title="Multi-empresa y roles"
              description="Cada empresa ve solo sus instrumentos. Administra usuarios como admin o usuario normal."
            />
            <FeatureCard
              title="Exportar a Excel"
              description="Descarga tu matriz actual a Excel y evita capturas manuales, con validaciones básicas."
            />
            <FeatureCard
              title="Listo para ampliarse"
              description="Pensado para integrar módulos de verificaciones, incertidumbre y etiquetas."
            />
          </div>
        </section>

        {/* Capturas de pantalla */}
        <section
          id={sections.capturas}
          className="space-y-8 border-t border-slate-800 py-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Capturas de pantalla
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Una vista rápida de cómo luce SmartGage. Más que una tabla,
              es tu tablero de control de instrumentos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 justify-center">
    
            {/* MATRIZ */}
            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <Image
                  src="/matriz.png"
                  alt="Matriz de instrumentos"
                  width={1200}               // tamaño de referencia
                  height={600}               // solo define proporción
                  className="object-cover"
                />
              </div>
              <p className="text-xs font-medium text-slate-200 md:text-sm">
                Matriz de instrumentos
              </p>
            </div>

            {/* CALENDARIO */}
            <div className="flex flex-col gap-2">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <Image
                  src="/calendario_v2.png"
                  alt="Calendario de calibraciones"
                  width={1200}
                  height={600}
                  className="object-cover"
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
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Planes y precios
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Empieza con un plan sencillo y escala conforme crecen tus
              necesidades. 
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PlanCard
              name="Starter"
              price="Gratis / prueba"
              description="Ideal para arrancar y validar SmartGage en un solo laboratorio o empresa."
              features={[
                "Hasta 50 instrumentos",
                "1 Empresa",
                "1 Administrador",
                "Matriz básica y calendario",
              ]}
              highlight={false}
            />
            <PlanCard
              name="Pro"
              price="Por definir"
              description="Pensado para laboratorios y empresas que necesitan trazabilidad y control completo."
              features={[
                "Hasta 1,500 instrumentos",
                "1 Empresa",
                "1 Administrador y 2 usuarios",                
                "Importar desde Excel",
              ]}
              highlight={true}
            />
            <PlanCard
              name="Enterprise (proximamente)"
              price="A medida"
              description="Para grupos corporativos o redes de laboratorios con requerimientos específicos."
              features={[
                "Instrumentos ilimitados",
                "Soporte prioritario",
                "Integraciones avanzadas",
                "Funcionalidades personalizadas",
              ]}
              highlight={false}
            />
          </div>
        </section>

        {/* Contacto */}
        <section
          id={sections.contacto}
          className="space-y-8 border-t border-slate-800 py-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Contacto
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              ¿Te gustaría probar SmartGage en tu laboratorio o empresa? 
              Escríbeme y platicamos cómo adaptarlo a tu realidad.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <ContactForm />

            <div className="space-y-4 text-sm text-slate-300">
              <p>
                También puedes contactarme directamente por correo:
              </p>
              <p className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-emerald-300">
                ventas@smartgage.com.mx
              </p>
              <p>
                Define si SmartGage será solo para tu laboratorio o si lo
                ofrecerás como servicio a terceros. La plataforma está
                pensada para crecer contigo.
              </p>
            </div>
          </div>
        </section>

        {/* Footer simple */}
        <footer className="border-t border-slate-800 pt-8 text-xs text-slate-500">
          <div className="flex flex-col items-center justify-between gap-3 pb-6 md:flex-row">
            <p>© {new Date().getFullYear()} SmartGage. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#que-es-smartgage" className="hover:text-emerald-300">
                Inicio
              </a>
              <Link
                href="https://app.smartgage.com.mx/login"
                className="hover:text-emerald-300"
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
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
      <h3 className="text-sm font-semibold text-slate-50 md:text-base">
        {title}
      </h3>
      <p className="mt-2 text-xs text-slate-300 md:text-sm">{description}</p>
    </div>
  );
}

function ScreenshotPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-dashed border-slate-700 bg-slate-900/60">
        <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">
          Aquí va una captura real de la app
        </div>
      </div>
      <p className="text-xs font-medium text-slate-200 md:text-sm">{title}</p>
    </div>
  );
}

function PlanCard({
  name,
  price,
  description,
  features,
  highlight,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-5 ${
        highlight
          ? "border-emerald-500 bg-slate-900/60 shadow-xl shadow-emerald-500/20"
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
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <a
          href="#contacto"
          className="block w-full rounded-xl border border-emerald-500/60 px-4 py-2 text-center text-xs font-semibold text-emerald-300 hover:bg-emerald-500/10 md:text-sm"
        >
          Hablar sobre este plan
        </a>
      </div>
    </div>
  );
}
