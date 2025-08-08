import type { Project } from "@/components/project-card"

export const projects: (Project & { slug: string })[] = [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "Personal portfolio highlighting projects, leadership, and contact.",
    image: "/images/project-portfolio.png",
    href: "https://dmajor.netlify.app",
    repo: "",
    tags: ["React", "Tailwind", "Netlify"],
  },
  {
    slug: "employee-directory",
    title: "Employee Directory (Backend)",
    description: "Python + MySQL backend API for employee records with CRUD endpoints.",
    image: "/images/project-employee-dir.png",
    href: "#",
    repo: "https://github.com/yourname/employee-directory", // replace
    tags: ["Python", "MySQL"],
  },
  {
    slug: "school-site",
    title: "School Website Design",
    description: "Responsive school website with academic pages, theming, and animations.",
    image: "/images/project-school.png",
    href: "#",
    repo: "https://github.com/yourname/school-site", // replace
    tags: ["React", "Bootstrap"],
  },
]
