export default function Skills() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C',
    'React',
    'Next.js',
    'Node.js',
    'FastAPI',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'Git',
    'Docker',
    'PyTorch',
  ]

  return (
    <section className="mb-16 sm:mb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}