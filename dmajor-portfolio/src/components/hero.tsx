import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'
import type { Personal } from "@/data/personal"

export function Hero({ personal }: { personal: Personal }) {
  return (
    <section id="home" className="relative overflow-hidden border-b" aria-labelledby="hero-heading">
      {/* Elegant gold accents */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
      {/* subtle grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:28px_28px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr,1.25fr]">
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative h-40 w-40 rounded-full ring-4 ring-amber-200">
              <Image
                src="/images/taiwo-portrait.png"
                alt="Taiwo David Aderotimi portrait placeholder"
                fill
                sizes="160px"
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <Badge className="bg-amber-600 hover:bg-amber-500">Frontend Developer</Badge>
            <h1 id="hero-heading" className="mt-3 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              {personal.name} <span className="text-slate-500">({personal.shortName})</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              {personal.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-500 text-white">
                <a href="#projects">
                  See projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contact me</a>
              </Button>
              <span className="text-sm text-slate-500">
                {personal.location} • {personal.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
