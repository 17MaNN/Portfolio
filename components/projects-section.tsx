type Project = {
  title: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    title: "Project One",
    image: "/project1.jpg",
    description: "A cool project built with modern tools.",
  },
  {
    title: "Project Two",
    image: "/project2.jpg",
    description: "A clean UI/UX showcase.",
  },
  {
    title: "Project Three",
    image: "/project3.jpg",
    description: "A powerful full-stack application.",
  },
]

import Image from "next/image"

export function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-xl"
          >
            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-white/70">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}