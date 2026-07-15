'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, FileDown } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Gentle parallax + fade as the hero leaves the viewport
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-24"
    >
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground"
        >
          <span className="inline-block size-2 rounded-full bg-accent" />
          Available for new opportunities
        </motion.p>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
          {['Full-stack software engineer', 'building for web', 'and mobile.'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
          className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          I&apos;m Paris Richards, a software engineer based in Chicago and a computer science graduate
          from Northern Illinois University. I focused on full-stack web development and mobile applications,
          handling everything from database design to API connections and frontend logic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.72 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            View my work
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/8sc7c29v21b8edbdfoxcx/Paris-s-Grad-CS-Resume-July26.pdf?rlkey=hbq8szrm46p5n487bv9cojj9b&st=u35rrieg&dl=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-secondary hover:text-foreground active:scale-95"
          >
            <FileDown className="size-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-secondary"
          >
            Contact me
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
