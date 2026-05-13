import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const doctors = await prisma.doctor.findMany({ where: { active: true }, orderBy: { name: "asc" } });
  return NextResponse.json(doctors);
}

export async function POST(req: NextRequest) {
  try {
    const { name, specialty, phone, bio } = await req.json();
    if (!name || !phone) return NextResponse.json({ error: "Nombre y teléfono son obligatorios" }, { status: 400 });
    const doctor = await prisma.doctor.create({ data: { name, specialty: specialty ?? "Clínica General", phone, bio } });
    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
