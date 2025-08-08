import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow = "Section",
  title = "Title",
  subtitle = "Optional subtitle",
  className,
}: {
  eyebrow?: string
  title?: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-sm font-medium text-amber-600">{eyebrow}</p>
      <h2 className="mt-1 text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
    </div>
  )
}
