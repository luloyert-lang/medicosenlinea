"use client";

export default function BookingCTA() {
  return (
    <section id="agendar" className="py-20 bg-[var(--primary)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Médicos disponibles ahora
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Tu salud no puede esperar.
          <br />Agendá tu consulta hoy.
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          En menos de 10 minutos podés estar hablando con un médico habilitado desde tu casa, trabajo o donde estés.
        </p>

        <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto shadow-2xl">
          <h3 className="font-bold text-[var(--text)] text-xl mb-6">Agendar consulta</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+595 9XX XXX XXX"
                  className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Motivo de consulta</label>
              <textarea
                rows={3}
                placeholder="Describí brevemente tus síntomas..."
                className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Fecha preferida</label>
                <input
                  type="date"
                  className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Horario preferido</label>
                <select className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors bg-white">
                  <option value="">Seleccioná...</option>
                  <option>Mañana (7:00 - 12:00)</option>
                  <option>Tarde (12:00 - 18:00)</option>
                  <option>Noche (18:00 - 23:00)</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              Confirmar y pagar — Gs. 120.000
            </button>
            <p className="text-xs text-center text-[var(--text-muted)]">
              Al agendar aceptás los{" "}
              <a href="#" className="text-[var(--primary)] hover:underline">términos y condiciones</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
