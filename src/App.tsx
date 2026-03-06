import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Skills from '@/components/Skills'
import SelectorShowcase from '@/sections/SelectorShowcase'
import ParticleShowcase from '@/sections/ParticleShowcase'
import { Github, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'

function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-950" />

      <motion.div
        className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"
        animate={{ x: [0, 70, 15, 0], y: [0, 35, -10, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-zinc-300/30 blur-3xl dark:bg-zinc-700/30"
        animate={{ x: [0, -70, -20, 0], y: [0, -50, -15, 0], scale: [1, 1.08, 0.92, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"
        animate={{ x: [0, 45, -25, 0], y: [0, -45, -10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-100/20 to-zinc-200/40 dark:via-zinc-900/20 dark:to-zinc-950/60" />
    </div>
  )
}

function RevealSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/50 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 dark:from-amber-600 dark:via-amber-400 dark:to-amber-100 bg-clip-text text-transparent">
              Jose Sebastian Reyes
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Analista y Desarrollador de Software especializado en crear experiencias digitales funcionales y atractivas.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="w-4 h-4" />
              <span>Colombia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Sobre mí</a></li>
              <li><a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Proyectos</a></li>
              <li><a href="#gallery" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#marquee" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Skills</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:sebastianreyes@example.com" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/573214109194" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/reyessebas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jsebastianreye" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Jose Sebastian Reyes Poveda. Todos los derechos reservados.</p>
          <a href="#home" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors flex items-center gap-1">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="tap-highlight-none relative min-h-screen overflow-x-clip">
      <AmbientBackground />
      <motion.div
        style={{ scaleX: progressX }}
        className="fixed top-0 left-0 right-0 z-[70] h-1 origin-left bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300"
      />

      <Navbar />
      <main className="pt-16">
        <RevealSection>
          <Hero />
        </RevealSection>

        <About />

        <RevealSection>
          <Projects />
        </RevealSection>

        <RevealSection className="relative">
          <section id="gallery">
            <SelectorShowcase />
          </section>
        </RevealSection>

        <RevealSection>
          <ParticleShowcase />
        </RevealSection>

        <section id="skills">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
