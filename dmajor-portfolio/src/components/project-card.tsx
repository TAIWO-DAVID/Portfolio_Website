import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, LinkIcon } from 'lucide-react'

export type Project = {
  slug?: string
  title?: string
  description?: string
  image?: string
  href?: string
  repo?: string
  tags?: string[]
}

export function ProjectCard({
  title = "Project",
  description = "Brief summary of the problem, approach, and outcome.",
  image = "/images/project-1.png",
  href = "#",
  repo = "#",
  tags = [],
}: Project) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-900/5">
      <CardHeader className="pb-0">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} thumbnail`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        {tags.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-500 text-white">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="mr-2 h-4 w-4" />
            Live
          </Link>
        </Button>
        {repo && repo !== "#" ? (
          <Button asChild size="sm" variant="outline">
            <Link href={repo} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        ) : null}
      </CardFooter>
      <div className="pointer-events-none absolute inset-0 rounded-md ring-0 ring-amber-500/0 transition group-hover:ring-8 group-hover:ring-amber-500/5" />
    </Card>
  )
}
