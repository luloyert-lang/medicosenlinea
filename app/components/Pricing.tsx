export default function Pricing() {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">Precio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Simple y transparente
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Sin suscripciones ni costos ocultos. Pagás solo cuando necesitás consultar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-[var(--border)] rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="font-bold text-[var(--text)] text-xl mb-1">Consulta única</h3>
              <p className="text-sm text-[var(--text-muted)]">Para cuando lo necesitás, sin compromiso.</p>
            </div>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-[var(--text-muted)] text-lg">Gs.</span>
              <span className="text-5xl font-bold text-[var(--text)]">120.000</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Consulta médica completa",
                "Atención por WhatsApp",
                "Válida 30 minutos",
                "Receta si es necesario (+Gs. 20.000)",
                "Certificado si corresponde (+Gs. 20.000)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#agendar" className="block text-center bg-white border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-light)] font-semibold px-6 py-3 rounded-xl transition-colors">
              Agendar consulta
            </a>
          </div>

          <div className="bg-[var(--primary)] rounded-2xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Más elegido
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-white text-xl mb-1">Pack familiar</h3>
              <p className="text-sm text-white/70">Para toda tu familia, sin límite de miembros.</p>
            </div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-white/70 text-lg">Gs.</span>
              <span className="text-5xl font-bold text-white">350.000</span>
            </div>
            <p className="text-white/60 text-xs mb-6">3 consultas — ahorrás Gs. 10.000 c/u</p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "3 consultas para usar cuando quieras",
                "Válidas 6 meses desde la compra",
                "Cualquier miembro de tu familia",
                "Recetas y certificados incluidos",
                "Soporte prioritario",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#agendar" className="block text-center bg-white text-[var(--primary)] hover:bg-[var(--primary-light)] font-semibold px-6 py-3 rounded-xl transition-colors">
              Comprar pack
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            Tigo Money
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            Personal Pay
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            Tarjeta de crédito / débito
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            Transferencia bancaria
          </div>
        </div>
      </div>
    </section>
  );
}
