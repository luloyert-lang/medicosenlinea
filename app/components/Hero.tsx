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
            <div className="relative w-full max-w-sm">
              <div className="bg-white rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden">
                <div className="bg-[var(--primary)] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M11.99 0C5.365 0 0 5.373 0 12.003c0 2.117.554 4.1 1.522 5.825L0 24l6.334-1.654A11.958 11.958 0 0011.99 24C18.627 24 24 18.627 24 12.003 24 5.373 18.627 0 11.99 0zm.01 21.894a9.886 9.886 0 01-5.031-1.374l-.36-.215-3.761.986 1.001-3.65-.236-.375A9.875 9.875 0 012.106 12c0-5.45 4.434-9.888 9.894-9.888 5.46 0 9.894 4.437 9.894 9.888 0 5.451-4.433 9.894-9.894 9.894z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">Dr. Carlos Martínez</p>
                    <p className="text-white/70 text-xs">En línea ahora</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="px-4 py-4 space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">Dr</div>
                    <div className="bg-[var(--surface)] rounded-2xl rounded-tl-none px-3 py-2 text-sm text-[var(--text)] max-w-xs">
                      ¡Hola! ¿En qué puedo ayudarte hoy?
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-[var(--primary)] rounded-2xl rounded-tr-none px-3 py-2 text-sm text-white max-w-xs">
                      Tengo fiebre y dolor de garganta desde ayer.
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">Dr</div>
                    <div className="bg-[var(--surface)] rounded-2xl rounded-tl-none px-3 py-2 text-sm text-[var(--text)] max-w-xs">
                      Entendido. Voy a hacerte algunas preguntas para orientarte mejor...
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--surface)] flex items-center gap-2">
                  <div className="flex-1 bg-white border border-[var(--border)] rounded-full px-3 py-2 text-xs text-[var(--text-muted)]">
                    Escribí tu mensaje...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  </div>
                </div>
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
