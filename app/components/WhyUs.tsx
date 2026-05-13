const stats = [
  { value: "< 10 min", label: "Tiempo de espera promedio" },
  { value: "4.9 / 5", label: "Calificación de pacientes" },
  { value: "7 días", label: "Disponibilidad semanal" },
  { value: "100%", label: "Médicos habilitados MSPBS" },
];

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Médicos 100% habilitados",
    desc: "Todos nuestros médicos poseen matrícula activa en el MSPBS y están verificados por nuestro equipo.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Información segura y privada",
    desc: "Tus datos médicos y conversaciones son 100% privados. Cumplimos con la Ley de Protección de Datos del Paraguay.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Documentos con validez legal",
    desc: "Las recetas y certificados emitidos tienen firma y sello digital del médico, válidos en farmacias y empresas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Disponible los 7 días",
    desc: "Atención disponible mañana, tarde y noche. Incluyendo fines de semana y feriados nacionales.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Precio justo, sin sorpresas",
    desc: "Un precio fijo por consulta, sin costos ocultos. Pagás solo si tu consulta es atendida.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Atención por WhatsApp",
    desc: "Sin apps nuevas que instalar. Usás WhatsApp, que ya tenés, para recibir tu consulta médica.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">Por qué elegirnos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Atención médica de calidad, sin complicaciones
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Somos la plataforma de telemedicina más práctica de Paraguay. Diseñada para que recibas atención real y confiable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[var(--border)] text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-1">{s.value}</div>
              <div className="text-xs text-[var(--text-muted)]">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[var(--border)] flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text)] mb-1 text-sm">{b.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
