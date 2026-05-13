"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Doctor = { id: string; name: string; specialty: string; phone: string };

export default function DoctorForm({ doctors }: { doctors: Doctor[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", specialty: "Clínica General", phone: "", bio: "" });
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ name: "", specialty: "Clínica General", phone: "", bio: "" });
      setOpen(false);
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
        <h2 className="font-semibold text-[var(--text)]">Médicos</h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-xs bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
        >
          + Agregar médico
        </button>
      </div>

      {open && (
        <form onSubmit={handleSubmit} className="px-6 py-5 border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">Nombre *</label>
              <input value={form.name} onChange={(e) => set("name", e.target.value)} required placeholder="Dr. Juan García"
                className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary)]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">Especialidad</label>
              <select value={form.specialty} onChange={(e) => set("specialty", e.target.value)}
                className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-[var(--primary)]">
                <option>Clínica General</option>
                <option>Pediatría</option>
                <option>Ginecología</option>
                <option>Cardiología</option>
                <option>Dermatología</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--text-muted)] mb-1">WhatsApp *</label>
              <input value={form.phone} onChange={(e) => set("phone", e.target.value)} required placeholder="+595 9XX XXX XXX"
                className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary)]" />
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={loading}
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:opacity-60 text-white font-medium py-2 rounded-lg text-sm transition-colors">
                {loading ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="divide-y divide-[var(--border)]">
        {doctors.length === 0 ? (
          <p className="px-6 py-8 text-sm text-[var(--text-muted)] text-center">No hay médicos registrados aún.</p>
        ) : doctors.map((d) => (
          <div key={d.id} className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center text-sm font-bold">
                {d.name.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
              </div>
              <div>
                <p className="font-medium text-sm text-[var(--text)]">{d.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{d.specialty}</p>
              </div>
            </div>
            <a href={`https://wa.me/${d.phone.replace(/\D/g, "")}`} target="_blank"
              className="text-xs text-[var(--accent)] hover:underline">{d.phone}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
