export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

type AppointmentRow = Prisma.AppointmentGetPayload<{
  include: { doctor: true; payment: true };
}>;

const STATUS_LABEL: Record<string, string> = {
  PENDING: "Pendiente",
  CONFIRMED: "Confirmada",
  IN_PROGRESS: "En curso",
  COMPLETED: "Completada",
  CANCELLED: "Cancelada",
};

const STATUS_COLOR: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-purple-100 text-purple-700",
  COMPLETED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default async function AdminPage() {
  const [appointments, total, pending, completed] = await Promise.all([
    prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
      include: { doctor: true, payment: true },
    }),
    prisma.appointment.count(),
    prisma.appointment.count({ where: { status: "PENDING" } }),
    prisma.appointment.count({ where: { status: "COMPLETED" } }),
  ]);

  const revenue = appointments
    .filter((a: AppointmentRow) => a.payment?.status === "PAID")
    .reduce((sum: number, a: AppointmentRow) => sum + a.amount, 0);

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <header className="bg-white border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <span className="font-semibold text-[var(--text)]">Admin — MédicosenLínea</span>
        </div>
        <a href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">← Ver sitio</a>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total citas", value: total, color: "text-[var(--primary)]" },
            { label: "Pendientes", value: pending, color: "text-yellow-600" },
            { label: "Completadas", value: completed, color: "text-[var(--accent)]" },
            { label: "Ingresos (Gs.)", value: revenue.toLocaleString("es-PY"), color: "text-[var(--primary)]" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <p className="text-xs text-[var(--text-muted)] mb-1">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--border)]">
            <h2 className="font-semibold text-[var(--text)]">Citas recientes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[var(--surface)]">
                <tr>
                  {["Paciente", "WhatsApp", "Motivo", "Fecha", "Horario", "Tipo", "Estado", "Monto"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[var(--text-muted)] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {appointments.length === 0 ? (
                  <tr><td colSpan={8} className="text-center py-12 text-[var(--text-muted)]">No hay citas aún</td></tr>
                ) : appointments.map((a: AppointmentRow) => (
                  <tr key={a.id} className="hover:bg-[var(--surface)] transition-colors">
                    <td className="px-4 py-3 font-medium text-[var(--text)] whitespace-nowrap">{a.patientName}</td>
                    <td className="px-4 py-3 text-[var(--text-muted)]">
                      <a href={`https://wa.me/${a.phone.replace(/\D/g, "")}`} target="_blank" className="hover:text-[var(--primary)]">{a.phone}</a>
                    </td>
                    <td className="px-4 py-3 text-[var(--text-muted)] max-w-xs truncate">{a.reason}</td>
                    <td className="px-4 py-3 text-[var(--text-muted)] whitespace-nowrap">
                      {new Date(a.date).toLocaleDateString("es-PY")}
                    </td>
                    <td className="px-4 py-3 text-[var(--text-muted)] whitespace-nowrap">{a.timeSlot}</td>
                    <td className="px-4 py-3 text-[var(--text-muted)]">{a.type === "PACK" ? "Pack" : "Única"}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLOR[a.status]}`}>
                        {STATUS_LABEL[a.status]}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-[var(--text)] whitespace-nowrap">
                      Gs. {a.amount.toLocaleString("es-PY")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
