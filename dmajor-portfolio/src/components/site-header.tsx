"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60" : "bg-white",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          D‑Major
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          <Button asChild variant="ghost">
            <a href="#projects">Projects</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#skills">Skills</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#experience">Experience</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#leadership">Leadership</a>
          </Button>
          <Button asChild variant="default" className="bg-amber-600 hover:bg-amber-500 text-white">
            <a href="#contact">Contact</a>
          </Button>
        </nav>
        <Button
          className="sm:hidden"
          size="icon"
          variant="ghost"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <div className="border-t bg-white px-4 py-2 sm:hidden">
          <div className="flex flex-col">
            <a className="px-2 py-2" href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a className="px-2 py-2" href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a className="px-2 py-2" href="#experience" onClick={() => setOpen(false)}>
              Experience
            </a>
            <a className="px-2 py-2" href="#leadership" onClick={() => setOpen(false)}>
              Leadership
            </a>
            <a className="px-2 py-2" href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
