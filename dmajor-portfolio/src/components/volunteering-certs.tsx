import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function VolunteeringCerts({
  volunteering,
  certifications,
}: {
  volunteering: { org: string; role: string; details: string }[]
  certifications: { title: string }[]
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Volunteering</h3>
        </CardHeader>
        <CardContent className="p-2">
          <Accordion type="single" collapsible className="w-full">
            {volunteering.map((v, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  <span className="font-medium">{v.role}</span>
                  <span className="mx-2 text-slate-500">•</span>
                  <span className="text-slate-600">{v.org}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-slate-700">{v.details}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Certifications</h3>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="space-y-2 text-slate-700">
            {certifications.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
                {c.title}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
