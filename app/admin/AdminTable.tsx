"use client";
import { useState } from "react";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";

type AppointmentRow = Prisma.AppointmentGetPayload<{ include: { doctor: true; payment: true } }>;
type Doctor = { id: string; name: string; specialty: string };

const STATUS_LABEL: Record<string, string> = {
  PENDING: "Pendiente", CONFIRMED: "Confirmada", IN_PROGRESS: "En curso",
  COMPLETED: "Completada", CANCELLED: "Cancelada",
};
const STATUS_COLOR: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700", CONFIRMED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-purple-100 text-purple-700", COMPLETED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default function AdminTable({ appointments, doctors }: { appointments: AppointmentRow[]; doctors: Doctor[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  async function updateAppointment(id: string, data: object) {
    setLoading(id);
    await fetch(`/api/appointments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(null);
    router.refresh();
  }

  async function sendWhatsApp(phone: string, name: string) {
    const msg = encodeURIComponent(`Hola ${name}, te contactamos desde MédicosenLínea para coordinar tu consulta médica.`);
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}?text=${msg}`, "_blank");
  }

  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
      <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
        <h2 className="font-semibold text-[var(--text)]">Citas</h2>
        <span className="text-xs text-[var(--text-muted)]">{appointments.length} registros</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[var(--surface)]">
            <tr>
              {["Paciente", "WhatsApp", "Motivo", "Fecha", "Horario", "Médico", "Estado", "Monto", "Acciones"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-[var(--text-muted)] whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {appointments.length === 0 ? (
              <tr><td colSpan={9} className="text-center py-12 text-[var(--text-muted)]">No hay citas aún</td></tr>
            ) : appointments.map((a) => (
              <tr key={a.id} className={`hover:bg-[var(--surface)] transition-colors ${loading === a.id ? "opacity-50" : ""}`}>
                <td className="px-4 py-3 font-medium text-[var(--text)] whitespace-nowrap">{a.patientName}</td>
                <td className="px-4 py-3">
                  <button onClick={() => sendWhatsApp(a.phone, a.patientName)}
                    className="text-[var(--accent)] hover:underline text-sm flex items-center gap-1">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M11.99 0C5.365 0 0 5.373 0 12.003c0 2.117.554 4.1 1.522 5.825L0 24l6.334-1.654A11.958 11.958 0 0011.99 24C18.627 24 24 18.627 24 12.003 24 5.373 18.627 0 11.99 0zm.01 21.894a9.886 9.886 0 01-5.031-1.374l-.36-.215-3.761.986 1.001-3.65-.236-.375A9.875 9.875 0 012.106 12c0-5.45 4.434-9.888 9.894-9.888 5.46 0 9.894 4.437 9.894 9.888 0 5.451-4.433 9.894-9.894 9.894z"/></svg>
                    {a.phone}
                  </button>
                </td>
                <td className="px-4 py-3 text-[var(--text-muted)] max-w-[150px] truncate" title={a.reason}>{a.reason}</td>
                <td className="px-4 py-3 text-[var(--text-muted)] whitespace-nowrap">{new Date(a.date).toLocaleDateString("es-PY")}</td>
                <td className="px-4 py-3 text-[var(--text-muted)] whitespace-nowrap text-xs">{a.timeSlot}</td>
                <td className="px-4 py-3">
                  <select
                    value={a.doctorId ?? ""}
                    onChange={(e) => updateAppointment(a.id, { doctorId: e.target.value || null })}
                    className="text-xs border border-[var(--border)] rounded-lg px-2 py-1 bg-white text-[var(--text)] max-w-[130px]"
                  >
                    <option value="">Sin asignar</option>
                    {doctors.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={a.status}
                    onChange={(e) => updateAppointment(a.id, { status: e.target.value })}
                    className={`text-xs font-medium px-2 py-1 rounded-lg border-0 cursor-pointer ${STATUS_COLOR[a.status]}`}
                  >
                    {Object.entries(STATUS_LABEL).map(([val, lbl]) => (
                      <option key={val} value={val}>{lbl}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3 font-medium text-[var(--text)] whitespace-nowrap">Gs. {a.amount.toLocaleString("es-PY")}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => sendWhatsApp(a.phone, a.patientName)}
                    title="Enviar WhatsApp"
                    className="w-7 h-7 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M11.99 0C5.365 0 0 5.373 0 12.003c0 2.117.554 4.1 1.522 5.825L0 24l6.334-1.654A11.958 11.958 0 0011.99 24C18.627 24 24 18.627 24 12.003 24 5.373 18.627 0 11.99 0zm.01 21.894a9.886 9.886 0 01-5.031-1.374l-.36-.215-3.761.986 1.001-3.65-.236-.375A9.875 9.875 0 012.106 12c0-5.45 4.434-9.888 9.894-9.888 5.46 0 9.894 4.437 9.894 9.888 0 5.451-4.433 9.894-9.894 9.894z"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
