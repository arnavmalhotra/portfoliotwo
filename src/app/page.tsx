import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
      <div className="relative max-w-2xl mx-auto px-6 py-16 sm:py-24">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}