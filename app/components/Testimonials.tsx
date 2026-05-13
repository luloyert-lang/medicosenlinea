const testimonials = [
  {
    name: "María González",
    location: "Asunción",
    rating: 5,
    text: "Mi hijo de 3 años tenía fiebre alta a las 11 de la noche. En 8 minutos ya estaba hablando con el doctor, que me orientó perfectamente. Una herramienta increíble para madres.",
    initials: "MG",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Roberto Villalba",
    location: "Ciudad del Este",
    rating: 5,
    text: "Necesitaba renovar mi receta de presión y no podía faltar al trabajo. Lo hice desde la oficina en 15 minutos. La receta llegó por WhatsApp y la farmacia la aceptó sin problema.",
    initials: "RV",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Lucía Benítez",
    location: "Encarnación",
    rating: 5,
    text: "Vivo en Encarnación y no hay especialistas accesibles. Tener médicos disponibles por WhatsApp cambió todo para mi familia. El certificado escolar de mi hija llegó en minutos.",
    initials: "LB",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Carlos Aquino",
    location: "Coronel Oviedo",
    rating: 5,
    text: "Tenía anginas y no quería esperar horas en el consultorio. El médico me atendió rápido, me recetó y me explicó todo. Al día siguiente ya me sentía mejor. Muy recomendable.",
    initials: "CA",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Sandra Martínez",
    location: "San Lorenzo",
    rating: 5,
    text: "Excelente servicio. El médico fue muy profesional, me hizo varias preguntas para entender bien mi situación. No extrañé para nada ir a un consultorio físico.",
    initials: "SM",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Diego Paredes",
    location: "Luque",
    rating: 5,
    text: "El precio es justo para lo que ofrecen. Pagué con Tigo Money y en 5 minutos ya tenía la confirmación. Muy fácil de usar, hasta mi mamá que no maneja bien la tecnología pudo hacerlo.",
    initials: "DP",
    color: "bg-teal-100 text-teal-700",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">Testimonios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Más de 500 consultas realizadas. Pacientes de todo Paraguay confían en Médicos en Línea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[var(--border)] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--text)]">{t.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{t.location}</p>
                  </div>
                </div>
                <Stars count={t.rating} />
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-blue-200", "bg-green-200", "bg-purple-200", "bg-orange-200"].map((c, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${c}`} />
              ))}
            </div>
            <span className="text-sm text-[var(--text-muted)]"><strong className="text-[var(--text)]">+500</strong> pacientes atendidos</span>
          </div>
          <div className="flex items-center gap-2">
            <Stars count={5} />
            <span className="text-sm text-[var(--text-muted)]"><strong className="text-[var(--text)]">4.9/5</strong> calificación promedio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
