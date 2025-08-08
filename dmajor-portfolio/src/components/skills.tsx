import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const groups: { title: string; items: { name: string; logo: string }[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", logo: "/logos/react.png" },
      { name: "JavaScript", logo: "/logos/js.png" },
      { name: "HTML5", logo: "/logos/html5.png" },
      { name: "CSS3", logo: "/logos/css3.png" },
      { name: "Bootstrap", logo: "/logos/bootstrap.png" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python", logo: "/logos/python.png" },
      { name: "MySQL", logo: "/logos/mysql.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/github.png" },
      { name: "Netlify", logo: "/logos/netlify.png" },
      { name: "Google Sheets", logo: "/logos/google-sheets.png" },
      { name: "V0.dev", logo: "/logos/v0.png" },
    ],
  },
]

export function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {groups.map((g) => (
        <Card key={g.title} className="border-slate-200">
          <CardHeader>
            <h3 className="text-lg font-semibold">{g.title}</h3>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 p-6">
            {g.items.map((item) => (
              <div key={item.name} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50/60 p-2">
                <div className="relative h-6 w-6">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain opacity-90"
                    sizes="24px"
                  />
                </div>
                <span className="text-sm text-slate-700">{item.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
