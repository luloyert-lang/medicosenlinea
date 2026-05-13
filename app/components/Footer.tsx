export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <span className="font-semibold text-lg">Médicos<span className="text-[var(--primary)]">enLínea</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Plataforma de telemedicina paraguaya. Conectamos pacientes con médicos habilitados para consultas rápidas, seguras y desde cualquier lugar del país.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 0C5.365 0 0 5.373 0 12.003c0 2.117.554 4.1 1.522 5.825L0 24l6.334-1.654A11.958 11.958 0 0011.99 24C18.627 24 24 18.627 24 12.003 24 5.373 18.627 0 11.99 0zm.01 21.894a9.886 9.886 0 01-5.031-1.374l-.36-.215-3.761.986 1.001-3.65-.236-.375A9.875 9.875 0 012.106 12c0-5.45 4.434-9.888 9.894-9.888 5.46 0 9.894 4.437 9.894 9.888 0 5.451-4.433 9.894-9.894 9.894z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {["Clínica general", "Receta médica", "Certificado médico", "Atención pediátrica", "Urgencias no críticas"].map((item) => (
                <li key={item}><a href="#servicios" className="text-white/60 hover:text-white text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Información</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "Precios", href: "#precios" },
                { label: "Preguntas frecuentes", href: "#preguntas" },
                { label: "Términos y condiciones", href: "#" },
                { label: "Política de privacidad", href: "#" },
              ].map((item) => (
                <li key={item.label}><a href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} MédicosenLínea. Todos los derechos reservados. Plataforma registrada en Paraguay.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/40 text-xs">
            <span>Director Médico: Dr. a confirmar — M.P. MSPBS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
