"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
          </div>
          <span className="font-semibold text-[var(--text)] text-lg leading-tight">
            Médicos<span className="text-[var(--primary)]">enLínea</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-muted)]">
          <a href="#como-funciona" className="hover:text-[var(--primary)] transition-colors">Cómo funciona</a>
          <a href="#servicios" className="hover:text-[var(--primary)] transition-colors">Servicios</a>
          <a href="#precios" className="hover:text-[var(--primary)] transition-colors">Precio</a>
          <a href="#preguntas" className="hover:text-[var(--primary)] transition-colors">FAQ</a>
        </nav>

        <a
          href="#agendar"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Agendar consulta
        </a>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[var(--surface)]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white px-4 py-4 flex flex-col gap-4">
          <a href="#como-funciona" onClick={() => setOpen(false)} className="text-sm font-medium text-[var(--text-muted)]">Cómo funciona</a>
          <a href="#servicios" onClick={() => setOpen(false)} className="text-sm font-medium text-[var(--text-muted)]">Servicios</a>
          <a href="#precios" onClick={() => setOpen(false)} className="text-sm font-medium text-[var(--text-muted)]">Precio</a>
          <a href="#preguntas" onClick={() => setOpen(false)} className="text-sm font-medium text-[var(--text-muted)]">FAQ</a>
          <a href="#agendar" onClick={() => setOpen(false)} className="bg-[var(--primary)] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">
            Agendar consulta
          </a>
        </div>
      )}
    </header>
  );
}
