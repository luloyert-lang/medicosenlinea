import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[var(--primary-light)] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent-dark)] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Médicos disponibles ahora
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-tight mb-6">
              Consultá con un médico{" "}
              <span className="text-[var(--primary)]">desde tu casa</span>
            </h1>

            <p className="text-lg text-[var(--text-muted)] mb-8 max-w-xl mx-auto lg:mx-0">
              Atención médica online por WhatsApp, los 7 días. Médicos habilitados por el MSPBS, recetas y certificados digitales válidos en todo Paraguay.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#agendar"
                className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-base"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Agendar consulta
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[var(--surface)] text-[var(--text)] font-semibold px-6 py-3.5 rounded-xl border border-[var(--border)] transition-colors text-base"
              >
                Ver cómo funciona
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Sin filas ni esperas
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Atención los 7 días
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Médicos habilitados MSPBS
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="Consulta médica online por WhatsApp"
                  width={1672}
                  height={941}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-[var(--accent)] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                ⚡ Respuesta en minutos
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-[var(--border)] text-xs font-medium px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-[var(--text-muted)]">4.9 / 5 pacientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
