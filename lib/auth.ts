import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin123";
const SESSION_COOKIE = "mel_admin_session";

export async function checkAdminAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  if (session?.value !== ADMIN_PASSWORD) redirect("/admin/login");
}

export async function validatePassword(password: string) {
  return password === ADMIN_PASSWORD;
}

export { SESSION_COOKIE };
