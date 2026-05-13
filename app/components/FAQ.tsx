"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Las consultas son con médicos reales?",
    a: "Sí. Todos nuestros médicos poseen matrícula profesional activa registrada en el Ministerio de Salud Pública y Bienestar Social (MSPBS) del Paraguay. Podés verificar sus credenciales en cualquier momento.",
  },
  {
    q: "¿Las recetas médicas son válidas en farmacias?",
    a: "Sí. Las recetas digitales emitidas por nuestros médicos tienen validez legal en Paraguay, llevan firma y sello digital del profesional y son aceptadas en las principales farmacias del país.",
  },
  {
    q: "¿Cómo me contacta el médico?",
    a: "Después de confirmar tu pago, recibirás una confirmación por WhatsApp. En el horario agendado, el médico te escribe directamente a tu número de WhatsApp. La atención puede ser por chat de texto, nota de voz o videollamada, según lo que prefieras.",
  },
  {
    q: "¿Qué pasa si el médico no me atiende?",
    a: "Si por algún motivo el médico no puede atenderte en el horario acordado, te ofrecemos reprogramar la consulta sin costo o un reembolso completo. Tu satisfacción está garantizada.",
  },
  {
    q: "¿Puedo consultar desde cualquier ciudad de Paraguay?",
    a: "Sí. Nuestro servicio está disponible para cualquier persona en territorio paraguayo. Desde Asunción, Ciudad del Este, Encarnación, Concepción, Pedro Juan Caballero o cualquier otra localidad.",
  },
  {
    q: "¿Qué condiciones NO se pueden atender de forma online?",
    a: "Las emergencias médicas graves (infarto, ACV, accidentes, dificultad respiratoria severa) deben atenderse en urgencias hospitalarias. Para esos casos, llamá al 147 (SEME). Nuestra plataforma atiende consultas no urgentes y urgencias menores.",
  },
  {
    q: "¿Cómo pago la consulta?",
    a: "Aceptamos Tigo Money, Personal Pay, tarjeta de crédito/débito (Visa, Mastercard) y transferencia bancaria. El pago se realiza antes de la consulta, de forma segura y encriptada.",
  },
  {
    q: "¿Puedo pedir consulta para un familiar?",
    a: "Sí. Podés agendar una consulta para cualquier miembro de tu familia. Solo indicá los datos del paciente al momento del agendamiento. El pack familiar incluye 3 consultas que podés usar para distintos miembros.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--border)] rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[var(--surface)] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-[var(--text)] text-sm pr-4">{q}</span>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`flex-shrink-0 text-[var(--text-muted)] transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="preguntas" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider mb-3">Preguntas frecuentes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-[var(--text-muted)]">
            ¿Tenés alguna pregunta que no está acá? Escribinos por WhatsApp.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </div>
    </section>
  );
}
