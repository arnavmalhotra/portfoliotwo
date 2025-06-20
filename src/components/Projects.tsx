interface Project {
  title: string
  year: string
  description: string
  technologies: string[]
  link?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'SuperchargedNotes',
      year: '2024',
      description: 'AI platform leveraging OCR to convert 5+ note formats into structured markdown with 90% accuracy. Features AI study tools including quizzes, flashcards, and summaries.',
      technologies: ['FastAPI', 'PostgreSQL', 'Next.js', 'TypeScript'],
      link: 'https://superchargednotes.com'
    },
    {
      title: 'OneTimeTable',
      year: '2025',
      description: 'Unified dashboard for students managing course schedules. Achieved 50+ users across 4 universities with automated LLM data extraction.',
      technologies: ['FastAPI', 'MongoDB', 'Next.js', 'Redis'],
      link: 'https://onetimetable.org'
    },
    {
      title: 'INeedHelp@YorkU',
      year: '2024',
      description: 'Centralized platform aggregating 80+ university support services. Attracted 1000+ visits and reduced student search time by 25%.',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'JWT'],
      link: 'https://ineedhelp.yorku.dev'
    }
  ]

  return (
    <section className="mb-16 sm:mb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}