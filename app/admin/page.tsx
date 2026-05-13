export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { checkAdminAuth } from "@/lib/auth";
import type { Prisma } from "@prisma/client";
import AdminTable from "./AdminTable";
import DoctorForm from "./DoctorForm";
import LogoutButton from "./LogoutButton";

type AppointmentRow = Prisma.AppointmentGetPayload<{ include: { doctor: true; payment: true } }>;

export default async function AdminPage() {
  await checkAdminAuth();

  const [appointments, doctors, total, pending, completed] = await Promise.all([
    prisma.appointment.findMany({ orderBy: { createdAt: "desc" }, take: 100, include: { doctor: true, payment: true } }),
    prisma.doctor.findMany({ where: { active: true }, orderBy: { name: "asc" } }),
    prisma.appointment.count(),
    prisma.appointment.count({ where: { status: "PENDING" } }),
    prisma.appointment.count({ where: { status: "COMPLETED" } }),
  ]);

  const revenue = (appointments as AppointmentRow[])
    .filter((a) => a.payment?.status === "PAID")
    .reduce((sum, a) => sum + a.amount, 0);

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <header className="bg-white border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <span className="font-semibold text-[var(--text)]">Admin — MédicosenLínea</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">← Ver sitio</a>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total citas", value: total, color: "text-[var(--primary)]" },
            { label: "Pendientes", value: pending, color: "text-yellow-600" },
            { label: "Completadas", value: completed, color: "text-[var(--accent)]" },
            { label: "Ingresos Gs.", value: revenue.toLocaleString("es-PY"), color: "text-[var(--primary)]" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-[var(--border)]">
              <p className="text-xs text-[var(--text-muted)] mb-1">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tabla de citas con acciones */}
        <AdminTable appointments={appointments as AppointmentRow[]} doctors={doctors} />

        {/* Gestión de médicos */}
        <DoctorForm doctors={doctors} />
      </main>
    </div>
  );
}
