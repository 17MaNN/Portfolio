export function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Python",
    "Figma",
  ]

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
