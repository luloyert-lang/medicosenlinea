import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyPatient, notifyAdmin } from "@/lib/whatsapp";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { patientName, phone, reason, date, timeSlot, type } = body;

    if (!patientName || !phone || !reason || !date || !timeSlot) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const amount = type === "PACK" ? 350000 : 120000;
    const appointment = await prisma.appointment.create({
      data: { patientName, phone, reason, date: new Date(date), timeSlot, type: type ?? "SINGLE", amount },
    });

    const dateFormatted = new Date(date).toLocaleDateString("es-PY", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });

    // Notificaciones en paralelo — no bloquean la respuesta si fallan
    await Promise.allSettled([
      notifyPatient({ patientName, phone, date: dateFormatted, timeSlot, type: type ?? "SINGLE", amount }),
      notifyAdmin({ patientName, phone, reason, date: dateFormatted, timeSlot, type: type ?? "SINGLE", amount }),
    ]);

    return NextResponse.json({ success: true, appointment }, { status: 201 });
  } catch (error) {
    console.error("Error creando cita:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { doctor: true, payment: true },
    });
    return NextResponse.json(appointments);
  } catch (error) {
    console.error("Error obteniendo citas:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
