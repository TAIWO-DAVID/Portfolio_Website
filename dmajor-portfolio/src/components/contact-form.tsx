"use client"

import { useActionState } from "react"
import { sendContact } from "../../app/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type ContactState = { ok: boolean; message: string }

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, {
    ok: false,
    message: "",
  })

  return (
    <Card>
      <CardContent className="p-6">
        <form action={action} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" name="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea id="message" name="message" required placeholder="Tell me about your project…" className="min-h-32" />
          </div>
          <div className="flex items-center justify-between">
            <p aria-live="polite" className={`text-sm ${state.ok ? "text-green-700" : "text-slate-600"}`}>
              {state.message}
            </p>
            <Button type="submit" disabled={pending} className="bg-amber-600 hover:bg-amber-500 text-white">
              {pending ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
