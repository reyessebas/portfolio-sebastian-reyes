import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'
import { ParticleTextEffect } from '@/components/ParticleTextEffect'

const videos = [
  { id: 1, src: '/videos/0205.mov', title: 'Concepto Visual', desc: 'Diseño y estructura' },
  { id: 2, src: '/videos/0207.mp4', title: 'Poster hecho en Affinity', desc: 'Diseño gráfico profesional' },
  { id: 3, src: '/videos/0209.mp4', title: 'Redes Sociales', desc: 'Con Figma mosaico y posts' },
]

export default function ParticleShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % videos.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const activeVideo = videos[activeIndex]

  return (
    <section id="particle-showcase" className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-amber-400/25 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-zinc-400/20 dark:bg-zinc-600/20 blur-3xl"
          animate={{ x: [0, -35, 0], y: [0, -22, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 px-6 pt-8 md:px-10 md:pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 dark:bg-zinc-100 dark:text-zinc-900"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Particle Experience
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            Mi proceso de trabajo
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="relative z-10 px-6 pb-8 md:px-10 md:pb-10 mt-6"
        >
          <ParticleTextEffect />
        </motion.div>

        {/* Video Showcase Container */}
        <div className="relative z-10 px-6 pb-8 md:px-10 md:pb-10">
          <div className="max-w-[1200px] mx-auto">
            {/* Main Video Showcase */}
            <div className="relative mb-6 overflow-hidden rounded-3xl border border-zinc-200/30 dark:border-zinc-700/50 bg-black shadow-2xl">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={activeVideo.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className="relative"
                  >
                    <video
                      src={activeVideo.src}
                      key={activeVideo.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-[20rem] sm:h-[26rem] md:h-[34rem] lg:h-[42rem] object-contain bg-black"
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 mb-3 backdrop-blur-sm border border-amber-400/30">
                          <Play className="w-3 h-3 text-amber-300" />
                          <span className="text-xs font-semibold text-amber-200 uppercase tracking-wider">
                            {activeIndex + 1} / {videos.length}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-2">{activeVideo.title}</h3>
                        <p className="text-sm md:text-base text-zinc-300">{activeVideo.desc}</p>
                      </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/60 flex items-center justify-center text-zinc-100 hover:bg-zinc-800/90 hover:scale-110 transition-all duration-300"
                      aria-label="Video anterior"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/60 flex items-center justify-center text-zinc-100 hover:bg-zinc-800/90 hover:scale-110 transition-all duration-300"
                      aria-label="Siguiente video"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {videos.map((video, index) => {
                  const isActive = index === activeIndex
                  return (
                    <motion.button
                      key={video.id}
                      type="button"
                      onClick={() => {
                        setDirection(index > activeIndex ? 1 : -1)
                        setActiveIndex(index)
                      }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`group relative overflow-hidden rounded-xl border text-left bg-black shadow-lg transition-all duration-500 ${isActive ? 'border-amber-400/90 ring-2 ring-amber-400/40' : 'border-zinc-700/60 hover:border-zinc-600/80'}`}
                    >
                      <div className="relative overflow-hidden">
                        <video
                          src={video.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className={`w-full h-24 sm:h-28 md:h-32 object-contain bg-black transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`}
                        />
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 border-2 border-amber-400 rounded-xl pointer-events-none"
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                          />
                        )}
                      </div>
                      <div className={`px-3 py-2 text-xs font-medium transition-colors duration-300 ${isActive ? 'bg-amber-500/20 text-amber-200' : 'bg-zinc-950/85 text-zinc-300 group-hover:text-zinc-100'}`}>
                        {video.title}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
      </motion.div>
    </section>
  )
}
