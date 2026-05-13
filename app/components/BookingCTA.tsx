"use client";
import { useState } from "react";

const timeSlots = ["Mañana (7:00 - 12:00)", "Tarde (12:00 - 18:00)", "Noche (18:00 - 23:00)"];

export default function BookingCTA() {
  const [form, setForm] = useState({ patientName: "", phone: "", reason: "", date: "", timeSlot: "", type: "SINGLE" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.patientName || !form.phone || !form.reason || !form.date || !form.timeSlot) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ patientName: "", phone: "", reason: "", date: "", timeSlot: "", type: "SINGLE" });
    } catch {
      setStatus("error");
    }
  }

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
          {status === "success" ? (
            <div className="py-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-bold text-[var(--text)] text-xl">¡Solicitud enviada!</h3>
              <p className="text-[var(--text-muted)] text-sm text-center">
                Recibimos tu solicitud. Te contactaremos por WhatsApp al <strong>{form.phone || "tu número"}</strong> para confirmar el horario y el pago.
              </p>
              <button onClick={() => setStatus("idle")} className="text-[var(--primary)] text-sm font-medium hover:underline mt-2">
                Agendar otra consulta
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-bold text-[var(--text)] text-xl mb-6">Agendar consulta</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Nombre completo *</label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      value={form.patientName}
                      onChange={(e) => set("patientName", e.target.value)}
                      required
                      className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="+595 9XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      required
                      className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Motivo de consulta *</label>
                  <textarea
                    rows={3}
                    placeholder="Describí brevemente tus síntomas..."
                    value={form.reason}
                    onChange={(e) => set("reason", e.target.value)}
                    required
                    className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Fecha preferida *</label>
                    <input
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => set("date", e.target.value)}
                      required
                      className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Horario preferido *</label>
                    <select
                      value={form.timeSlot}
                      onChange={(e) => set("timeSlot", e.target.value)}
                      required
                      className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--primary)] transition-colors bg-white"
                    >
                      <option value="">Seleccioná...</option>
                      {timeSlots.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "SINGLE", label: "Consulta única", price: "Gs. 120.000" },
                    { value: "PACK", label: "Pack familiar", price: "Gs. 350.000 (3c.)" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => set("type", opt.value)}
                      className={`border-2 rounded-xl px-3 py-3 text-left transition-colors ${form.type === opt.value ? "border-[var(--primary)] bg-[var(--primary-light)]" : "border-[var(--border)] hover:border-[var(--primary)]/50"}`}
                    >
                      <p className="text-xs font-semibold text-[var(--text)]">{opt.label}</p>
                      <p className="text-xs text-[var(--primary)] font-bold mt-0.5">{opt.price}</p>
                    </button>
                  ))}
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs text-center">Hubo un error. Intentá de nuevo o escribinos por WhatsApp.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                    </svg>
                  )}
                  {status === "loading" ? "Enviando..." : `Solicitar consulta — ${form.type === "PACK" ? "Gs. 350.000" : "Gs. 120.000"}`}
                </button>
                <p className="text-xs text-center text-[var(--text-muted)]">
                  Te contactamos por WhatsApp para confirmar y coordinar el pago.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
