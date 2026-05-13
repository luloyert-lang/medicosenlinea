import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyPatient } from "@/lib/whatsapp";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, doctorId, notes } = body;

    const appointment = await prisma.appointment.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(doctorId !== undefined && { doctorId }),
        ...(notes !== undefined && { notes }),
      },
      include: { doctor: true },
    });

    // Notificar al paciente si se confirma o cancela
    if (status === "CONFIRMED") {
      const doctorName = appointment.doctor?.name ?? "nuestro médico";
      const text =
        `✅ *Consulta confirmada* — MédicosenLínea\n\n` +
        `Hola *${appointment.patientName}*, tu consulta fue confirmada.\n\n` +
        `👨‍⚕️ *Médico:* ${doctorName}\n` +
        `📅 *Fecha:* ${new Date(appointment.date).toLocaleDateString("es-PY", { weekday: "long", day: "numeric", month: "long" })}\n` +
        `🕐 *Horario:* ${appointment.timeSlot}\n\n` +
        `El médico se comunicará con vos por este WhatsApp. ¡Cualquier duda, respondé este mensaje! 🩺`;
      notifyPatient({ ...appointment, date: text, timeSlot: "", type: appointment.type, amount: appointment.amount }).catch(() => {});
    }

    if (status === "CANCELLED") {
      const text =
        `❌ *Consulta cancelada* — MédicosenLínea\n\n` +
        `Hola *${appointment.patientName}*, tu consulta fue cancelada.\n` +
        `Si deseas reprogramar, ingresá a medicosenlinea.com.py o respondé este mensaje.`;
      notifyPatient({ ...appointment, date: text, timeSlot: "", type: appointment.type, amount: appointment.amount }).catch(() => {});
    }

    return NextResponse.json(appointment);
  } catch (error) {
    console.error("Error actualizando cita:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
