"use server"

export async function sendContact(prev: any, formData: FormData) {
  await new Promise((r) => setTimeout(r, 600))
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !message) return { ok: false, message: "Please fill out all fields." }
  // In production: send email or store in DB here.
  return { ok: true, message: `Thanks ${name}, I’ll reply to ${email} soon.` }
}
