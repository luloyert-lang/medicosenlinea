const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Clínica general",
    desc: "Gripe, fiebre, infecciones, dolores, presión arterial, diabetes y más afecciones frecuentes.",
    tags: ["Adultos", "Niños"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Receta médica digital",
    desc: "Renovación de recetas crónicas o nuevas prescripciones cuando el médico lo indica. Válidas en farmacias.",
    tags: ["Digital", "Válida PY"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
    ),
    title: "Certificado médico",
    desc: "Certificados de reposo laboral o escolar con firma y sello médico digital, con validez legal.",
    tags: ["Laboral", "Escolar"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Orientación y seguimiento",
    desc: "Segunda opinión médica, orientación sobre síntomas, seguimiento de tratamientos en curso.",
    tags: ["Segunda opinión", "Seguimiento"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Atención pediátrica",
    desc: "Consultas para bebés y niños. Orientación para padres sobre fiebre, alergias, alimentación y desarrollo.",
    tags: ["Bebés", "Niños"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Urgencias no críticas",
    desc: "Atención rápida para síntomas que no requieren emergencia hospitalaria pero sí orientación inmediata.",
    tags: ["24/7", "Rápido"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">Qué tratamos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Servicios médicos online
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Nuestros médicos habilitados atienden una amplia variedad de consultas desde la comodidad de tu hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)] hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="font-semibold text-[var(--text)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{s.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {s.tags.map((tag, j) => (
                  <span key={j} className="text-xs bg-[var(--surface)] text-[var(--text-muted)] px-2 py-1 rounded-full border border-[var(--border)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
