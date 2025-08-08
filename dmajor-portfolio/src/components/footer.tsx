export function Footer({ brand = "D‑Major" }: { brand?: string }) {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row">
        <p>{new Date().getFullYear()} {brand}. All rights reserved.</p>
        <nav className="flex gap-6">
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
