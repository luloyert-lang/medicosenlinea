"use client";
export default function LogoutButton() {
  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.href = "/admin/login";
  }
  return (
    <button onClick={logout} className="text-xs text-[var(--text-muted)] border border-[var(--border)] px-3 py-1.5 rounded-lg hover:bg-[var(--surface)]">
      Cerrar sesión
    </button>
  );
}
