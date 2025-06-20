interface Experience {
  title: string
  company: string
  location: string
  duration: string
  description: string[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: 'Software Engineering Intern',
      company: 'Quarkle.ai',
      location: 'Remote',
      duration: 'Present',
      description: [
        'Currently working as a software engineering intern on cutting-edge AI/ML projects'
      ]
    },
    {
      title: 'Lead Software Developer',
      company: 'OneTimeTable',
      location: 'Remote',
      duration: 'Jan 2025 - Present',
      description: [
        'Developed full-stack student dashboard using FastAPI, MongoDB, and Next.js; drove adoption to 50+ users across 4 universities',
        'Achieved 35+ companion Chrome extension installs with automated course data extraction via LLM pipelines (95% accuracy)',
        'Enhanced performance via Redis caching, reducing average load times by 60% and saving students up to 3 hours per semester'
      ]
    },
    {
      title: 'Software Developer',
      company: 'York University',
      location: 'Toronto, ON',
      duration: 'Oct 2024 - Apr 2025',
      description: [
        'Developed and deployed full-stack calendar application for diversity events using FastAPI, MongoDB, and React',
        'Achieved adoption by 200+ faculty and staff with automated content generation via Selenium scraping across 10+ sources',
        'Leveraged LLMs for description generation, cutting manual curation effort by 90%'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Parcon India Private Limited',
      location: 'Kolkata, India',
      duration: 'Jul 2024 - Sep 2024',
      description: [
        'Created C/Python automation scripts integrated with Excel and ERP systems for document workflows',
        'Automated document signing and uploading processes handling thousands of invoices monthly',
        'Saved 90+ weekly staff-hours and eliminated administrative errors'
      ]
    },
    {
      title: 'Research Fellow',
      company: 'Indian Institute of Technology, Roorkee',
      location: 'Roorkee, India',
      duration: 'May 2024 - Jul 2024',
      description: [
        'Enhanced transparency in AI decision-making through research on hybrid BCos-KAN architectures for MRI segmentation',
        'Engineered lightweight CNN-transformer models for mobile image enhancement achieving DSLR-quality output',
        'Reduced model size by 50% compared to baseline architectures while maintaining performance'
      ]
    }
  ]

  return (
    <section className="mb-16 sm:mb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                <p className="text-gray-600">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{exp.duration}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {exp.description.map((desc, idx) => (
                <li key={idx} className="text-gray-700 text-sm leading-relaxed">
                  • {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}