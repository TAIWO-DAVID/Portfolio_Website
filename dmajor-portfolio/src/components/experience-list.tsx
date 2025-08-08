import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export type ExperienceItem = {
  company: string
  role: string
  period: string
  logo: string
  bullets: string[]
}

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((exp) => (
        <Card key={exp.company}>
          <CardContent className="flex items-start gap-4 p-6">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border bg-white">
              <Image src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} fill className="object-contain p-1" sizes="48px" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold">{exp.role}</h3>
                <span className="text-slate-500">•</span>
                <p className="text-slate-600">{exp.company}</p>
              </div>
              <p className="text-sm text-slate-500">{exp.period}</p>
              <ul className="mt-2 list-inside list-disc text-sm text-slate-700">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
