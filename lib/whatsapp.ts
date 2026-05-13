const EVOLUTION_URL = process.env.EVOLUTION_URL!;
const EVOLUTION_KEY = process.env.EVOLUTION_KEY!;
const EVOLUTION_INSTANCE = process.env.EVOLUTION_INSTANCE!;
const ADMIN_PHONE = process.env.ADMIN_PHONE!;

async function sendText(number: string, text: string) {
  const clean = number.replace(/\D/g, "");
  const res = await fetch(`${EVOLUTION_URL}/message/sendText/${EVOLUTION_INSTANCE}`, {
    method: "POST",
    headers: { "apikey": EVOLUTION_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ number: clean, text }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error(`[WhatsApp] Error enviando a ${clean}:`, err);
  }
  return res.ok;
}

export async function notifyPatient(data: {
  patientName: string;
  phone: string;
  date: string;
  timeSlot: string;
  type: string;
  amount: number;
}) {
  const text =
    `👋 Hola *${data.patientName}*, recibimos tu solicitud de consulta médica en *MédicosenLínea*.\n\n` +
    `📅 *Fecha solicitada:* ${data.date}\n` +
    `🕐 *Horario:* ${data.timeSlot}\n` +
    `💊 *Tipo:* ${data.type === "PACK" ? "Pack familiar (3 consultas)" : "Consulta única"}\n` +
    `💵 *Monto:* Gs. ${data.amount.toLocaleString("es-PY")}\n\n` +
    `En breve nos comunicamos con vos para confirmar el horario exacto y coordinar el pago.\n\n` +
    `¿Tenés alguna duda? Respondé este mensaje y te atendemos. 🩺`;

  return sendText(data.phone, text);
}

export async function notifyAdmin(data: {
  patientName: string;
  phone: string;
  reason: string;
  date: string;
  timeSlot: string;
  type: string;
  amount: number;
}) {
  const text =
    `🔔 *Nueva solicitud de consulta*\n\n` +
    `👤 *Paciente:* ${data.patientName}\n` +
    `📱 *WhatsApp:* +${data.phone.replace(/\D/g, "")}\n` +
    `📋 *Motivo:* ${data.reason}\n` +
    `📅 *Fecha:* ${data.date}\n` +
    `🕐 *Horario:* ${data.timeSlot}\n` +
    `💊 *Tipo:* ${data.type === "PACK" ? "Pack familiar" : "Consulta única"}\n` +
    `💵 *Monto:* Gs. ${data.amount.toLocaleString("es-PY")}\n\n` +
    `➡️ Ver en el admin: https://medicosenlinea.com.py/admin`;

  return sendText(ADMIN_PHONE, text);
}
