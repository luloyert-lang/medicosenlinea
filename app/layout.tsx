import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Médicos en Línea Paraguay | Consultas Médicas por WhatsApp 24/7",
  description:
    "Consultá con médicos habilitados desde tu casa. Atención por WhatsApp, recetas y certificados digitales válidos. Sin filas, sin esperas. Paraguay.",
  keywords: "telemedicina paraguay, médico online paraguay, consulta médica whatsapp, médico a domicilio virtual",
  openGraph: {
    title: "Médicos en Línea Paraguay",
    description: "Consultas médicas online 24/7 por WhatsApp. Rápido, seguro y sin salir de tu casa.",
    url: "https://medicosenlinea.com.py",
    siteName: "Médicos en Línea",
    locale: "es_PY",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
